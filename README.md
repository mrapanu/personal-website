# Mihai A.R. Personal Website

This is my personal website repository! This project serves as an interactive and creative web platform that includes a terminal-style interface, commands for exploring various content, and even a simple motorcycle game.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Getting Started](#getting-started)
4. [Commands](#commands)
5. [Game](#game)
6. [License](#license)

## Introduction

This personal website is designed to provide visitors with a unique and engaging experience reminiscent of a command-line interface. Users can navigate through different sections, access information, and even play a simple motorcycle racing game.

## Features

- **Interactive Terminal**: The website features an interactive terminal-style interface where users can input commands to explore various sections and content.

- **Content Sections**: Users can access information about the owner (Mihai A.R.), view a resume (to be implemented), explore projects (to be implemented), and enjoy jokes from different categories.

- **Game**: The website includes a simple motorcycle racing game accessible through a dedicated command.

## Getting Started

To run the website locally, follow these steps:

1. Clone the repository: `git clone https://github.com/mrapanu/personal-website.git`
2. Navigate to the project directory: `cd personal-website`
3. Open the `index.html` file in your preferred web browser to access the main website. For the game, open `game.html`. The interactive terminal allows users to input commands and explore the content.

Also you can build a docker image and start it.
```
cd personal-website
docker build -t personalwebsite .
docker run --name test -p 8085:80 -it personalwebsite
```

## Commands

The terminal supports various commands, including but not limited to:

- `help`: Display available commands.
- `who`: Display information about the website owner.
- `resumee`: View the owner's resume.
- `linkedin`: View the owner's LinkedIn profile.
- `projects`: Explore the owner's projects.
- `ascii_banner`: Display an ASCII art banner.
- `clear`: Clear the terminal screen.
- `email`: Open an email prompt to contact the owner.
- `joke`: Display a random joke.
- `joke -p`: Display a random programming-related joke.
- `joke -d`: Display a random dad joke.
- `secret_files`: Unlock protected content with a password prompt.
- `game`: Start the motorcycle racing game.

## Game

The website includes a simple motorcycle racing game accessible through the `game` command from the terminal. Use the space bar to swerve and the ESC key to exit.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for your own purposes.

Enjoy exploring the website and have fun with the interactive features!
