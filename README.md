# Weather App

This is a React Native application that fetches and displays the weather data for the user's current location. Users can also select and view weather data for predefined cities.

![WhatsApp Image 2024-06-23 at 09 19 21_93fbfa70](https://github.com/ksvskarthik7/Weather-Android-app/assets/114343100/bbb92da3-e1bc-4bca-aaae-88ae19780063)


![WhatsApp Image 2024-06-23 at 09 19 21_82ab33d5](https://github.com/ksvskarthik7/Weather-Android-app/assets/114343100/763cc7f2-68e6-42a5-83ff-90732191c151)


![WhatsApp Image 2024-06-23 at 09 19 21_9c0057f3](https://github.com/ksvskarthik7/Weather-Android-app/assets/114343100/fa1e437a-8170-4853-9d4c-b280c8cde5e4)




## Features

- Fetches weather data based on user's current location.
- Displays weather data including city name, temperature, and weather description.
- Indicates whether it is daytime or nighttime with a background color change.
- Allows users to add a city and fetch weather data for that city using a modal interface.

## Installation

### Prerequisites

- Node.js and npm/yarn installed
- Expo CLI installed
- OpenWeatherMap API key

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/weather-app.git
    cd weather-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
    ```env
    API_KEY=your_openweathermap_api_key
    ```

4. Start the application:
    ```bash
    npm start
    ```
    or
    ```bash
    yarn start
    ```

## Usage

1. Run the application on your emulator or physical device using Expo.
2. Grant location permissions when prompted.
3. The app will fetch and display the weather data for your current location.
4. Click the "+" button to add a city. Select a city from the modal to fetch its weather data.

## Code Structure

- `Index.js`: The main component of the application.
- Uses `useState` and `useEffect` hooks to manage state and side effects.
- Fetches location and weather data using Expo Location and OpenWeatherMap API.
- Displays weather data and handles city selection with a modal.

## Dependencies

- `react`: JavaScript library for building user interfaces.
- `react-native`: Framework for building native apps using React.
- `expo-location`: Expo module for accessing device location.
- `expo`: Toolkit for building React Native apps.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
- [Expo](https://expo.dev/) for the excellent tools and services for React Native development.
