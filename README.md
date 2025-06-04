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
4. Follow the onscreen instructions to run the app on an Android or iOS simulator or on a physical device with the Expo Go app.

## Project Structure

- `app/App.js` – main application file containing the game logic and basic animations.
- `app/package.json` – package manifest with dependencies and expo scripts.

Feel free to extend the app with additional rules or improved animations!
