# React Native Weather App

This is a React Native application that displays the current weather information for the user's location. The app also allows users to select a city from a predefined list and view its weather information.

## Features

- **Current Location Weather**: Fetches and displays weather data based on the user's current location.
- **City Weather Selection**: Allows users to select a city from a predefined list (London, New York, Tokyo, Paris) to view its weather information.
- **Daytime/Nighttime Background**: Changes the background color based on whether it is daytime or nighttime at the user's location.
- **Error Handling**: Displays error messages when location or weather data cannot be fetched.

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/react-native-weather-app.git
   cd react-native-weather-app
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Add your OpenWeatherMap API key:**

   - Replace `API_KEY` with your OpenWeatherMap API key in the `fetchWeatherData` and `fetchWeatherDataForCity` functions.

## Usage

1. **Run the app:**

   ```sh
   npm start
   ```

2. **Follow the instructions to launch the app on an emulator or a physical device using Expo Go.**

## Code Overview

### `Index.js`

- **State Variables:**
  - `weatherData`: Stores the fetched weather data.
  - `errorMessage`: Stores any error messages.
  - `isDaytime`: Tracks if it's daytime or nighttime.
  - `modalVisible`: Controls the visibility of the modal for selecting cities.
  - `selectedCity`: Stores the selected city data.

- **Functions:**
  - `getLocationAndFetchWeather`: Requests location permissions, fetches the user's location, and retrieves weather data.
  - `fetchWeatherData`: Fetches weather data using latitude and longitude.
  - `fetchNativeTime`: Determines if it's daytime or nighttime based on the current time.
  - `handleAddCity`: Opens the modal for selecting a city.
  - `handleSelectCity`: Fetches weather data for the selected city and closes the modal.
  - `fetchWeatherDataForCity`: Fetches weather data for a specified city name.

### `styles`

Contains styles for the app components using `StyleSheet.create`.


