# Card Game Scorer

This is a simple mobile score tracking app built with React Native using Expo. The app allows you to enter player names, choose who starts first, record scores for each round and keep the scoreboard updated in real time.

## Features

- Add any number of players and select who begins the game.
- Enter round scores for each player via dropdown pickers.
- Scores are totaled and the players are re‑ordered after every round so the leader appears first.
- Animated highlight whenever the front runner changes and a celebratory animation for the winner when the game ends.

## Getting Started

This project uses [Expo](https://expo.dev/) for development.

1. Install the Expo CLI if you don't already have it:
   ```bash
   npm install -g expo-cli
   ```
2. Install dependencies:
   ```bash
   cd app
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Install the **Expo Go** app from the iOS or Android app store.
   Open Expo Go and use its **Scan QR Code** feature to scan the code printed by
   the `npm start` command. Scanning the QR code with the default camera app will
   not open the app.
5. If your device is not on the same local network as your computer, run
   `npm start -- --tunnel` instead to generate a URL that works over the
   internet.

## Project Structure

- `app/App.js` – main application file containing the game logic and basic animations.
- `app/package.json` – package manifest with dependencies and expo scripts.

Feel free to extend the app with additional rules or improved animations!
