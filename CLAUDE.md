# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Valentine-themed project. Python-based (per .gitignore configuration).

## Current State

This is a new repository with initial setup only. No source code, dependencies, or build configuration exists yet.

## Technology Stack

- **Language:** Python 3.x
- **Package Manager:** Not yet configured (gitignore supports Poetry, UV, Pipenv, PDM, Pixi)
- **Framework:** Not yet selected (gitignore supports Django, Flask)

## Development Setup

Once dependencies are added, typical commands will be:

```bash
# Create virtual environment
python -m venv .venv
source .venv/bin/activate  # or .venv\Scripts\activate on Windows

# Install dependencies (once requirements.txt or pyproject.toml exists)
pip install -r requirements.txt
# or: poetry install / uv sync / pipenv install
```

## Architecture

To be documented as the project develops.