
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import * as Location from 'expo-location';


export default function Index() {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isDaytime, setIsDaytime] = useState(false); // State to track if it's daytime or nighttime
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility
  const [selectedCity, setSelectedCity] = useState(null); // State to store selected city data

  useEffect(() => {
    getLocationAndFetchWeather();
    fetchNativeTime();
  }, []);

  const getLocationAndFetchWeather = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        throw new Error('Location permission not granted');
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      
      fetchWeatherData(latitude, longitude);
    } catch (error) {
      console.error('Error fetching location and weather data:', error.message);
      setErrorMessage('Failed to fetch location and weather data');
    }
  };

  const fetchWeatherData = async (latitude, longitude) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Weather data not available');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
      setErrorMessage('Failed to fetch weather data');
    }
  };

  const fetchNativeTime = () => {
    const currentTime = new Date().getHours();
    setIsDaytime(currentTime >= 6 && currentTime < 18); // Assume daytime between 6 AM to 6 PM (adjust as needed)
  };

  const handleAddCity = () => {
    setModalVisible(true);
  };

  const handleSelectCity = (cityName) => {
    // For simplicity, you can directly fetch data for London when selected
    fetchWeatherDataForCity(cityName);
    setModalVisible(false);
  };

  const fetchWeatherDataForCity = async (cityName) => {
    // Implement API call to fetch weather data for the selected city
    // Example: Fetch weather data for cityName and update state
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    const response = await fetch(API_URL);
    const data = await response.json();
    setWeatherData(data);

    setSelectedCity(null); // Reset selected city if needed
  };

  if (errorMessage) {
    return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
      </View>
    );
  }

  if (!weatherData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Determine background color based on isDaytime state
  const backgroundColor = isDaytime ? '#b3e0ff' : '#00264d';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {weatherData && (
        <>
          <Text style={styles.city}>{weatherData.name}</Text>
          <Text style={styles.temperature}>{weatherData.main.temp}°C</Text>
          <Text style={styles.description}>{weatherData.weather[0].description}</Text>
        </>
      )}
  
      <TouchableOpacity style={styles.addButton} onPress={handleAddCity}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
  
      {/* Modal for adding a new city */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <FlatList
            data={['London', 'New York', 'Tokyo', 'Paris']} // Example cities to select
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.cityButton} onPress={() => handleSelectCity(item)}>
                <Text style={styles.cityButtonText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </Modal>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  city: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    marginBottom: 10,
  },
  description: {
    fontSize: 24,
    marginBottom: 20,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#ff6347',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 32,
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  cityButton: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginVertical: 10,
    borderRadius: 10,
  },
  cityButtonText: {
    fontSize: 18,
  },
});
