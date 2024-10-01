# Deadlock Creep Spawn Timer

This project provides a simple and precise timer to track the spawn time of creep waves in the game _Deadlock_. The timer shows the time remaining before the next wave of creeps spawns, with a 25-second countdown and a visual progress bar.

You can view the live version here: [https://deadlock-timer.vercel.app/](https://deadlock-timer.vercel.app/)

## Features

- **Timer**: A 25-second countdown starts when the user clicks "Start". It shows the exact time left before the next creep wave spawns.
- **Progress Bar**: A visual progress bar fills up as time passes, providing an intuitive way to track when the next wave will spawn.
- **Reset Function**: A reset button restarts the countdown, resetting the progress bar and timer back to 25 seconds.
- **Responsive Design**: Optimized for different screen sizes with adaptive styling using Tailwind CSS.

## Usage

1. Click the "Start" button to begin the timer. The countdown will show the time remaining before the next creep spawn (25-second interval).
2. Watch the progress bar fill up as time advances.
3. Click "Stop" to pause the timer at any moment, and "Reset" to restart the countdown to 25 seconds.

## Technologies Used

- **Next.js**: React-based framework for building server-rendered and statically generated websites.
- **Tailwind CSS**: Utility-first CSS framework for styling the interface.
- **TypeScript**: Ensures type safety throughout the application.
