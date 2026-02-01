let noClickCount = 0;

const messages = [
  "No",
  "Are you sure, my love? 🥺",
  "But I love you so much!",
  "My beautiful fiancée please! 💍",
  "I'll get you ice cream! 🍦",
  "And all the cake! 🍰",
  "And endless chocolates! 🍫",
  "Think of our cuddles! 🤗",
  "I'll give you all the kisses! 😘",
  "You're my whole world! 🌍",
  "My heart is only yours! 💖",
  "Meghana, my love... 😢",
  "I can't live without you!",
  "Please say yes, baby? 🥺",
  "You know I adore you!",
  "Forever and always! 💕",
  "You're my soulmate! ✨",
  "Just say yes, my love!",
  "I love you endlessly! 💗",
  "YES! Say it! 💍💕"
];

function growYes() {
  noClickCount++;
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');

  // Grow the yes button
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = (currentSize + 5) + 'px';
  yesButton.style.padding = `${15 + noClickCount * 3}px ${40 + noClickCount * 8}px`;

  // Change the no button text
  if (noClickCount < messages.length) {
    noButton.textContent = messages[noClickCount];
  }

  // Shrink the no button after a few clicks
  if (noClickCount > 3) {
    const noSize = parseFloat(window.getComputedStyle(noButton).fontSize);
    noButton.style.fontSize = Math.max(noSize - 2, 8) + 'px';
    noButton.style.opacity = Math.max(1 - noClickCount * 0.05, 0.3);
  }
}

function sayYes() {
  document.getElementById('question-container').classList.add('hidden');
  document.getElementById('yes-container').classList.remove('hidden');

  // Create confetti effect
  createConfetti();
}

function createConfetti() {
  const colors = ['#ff6b6b', '#ff8e8e', '#ffb3b3', '#ffd4d4', '#ff9999', '#ff4757'];
  const confettiCount = 100;

  for (let i = 0; i < confettiCount; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.style.cssText = `
        position: fixed;
        width: ${Math.random() * 10 + 5}px;
        height: ${Math.random() * 10 + 5}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}vw;
        top: -20px;
        border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
        pointer-events: none;
        animation: fall ${Math.random() * 3 + 2}s linear forwards;
      `;
      document.body.appendChild(confetti);

      // Remove confetti after animation
      setTimeout(() => confetti.remove(), 5000);
    }, i * 30);
  }

  // Add falling animation if not exists
  if (!document.getElementById('confetti-style')) {
    const style = document.createElement('style');
    style.id = 'confetti-style';
    style.textContent = `
      @keyframes fall {
        to {
          transform: translateY(100vh) rotate(720deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}
