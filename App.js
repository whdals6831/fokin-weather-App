import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import axios from 'axios';
import * as Location from 'expo-location';

const API_KEY = 'd0259d268096477ab7e1a5d69279d6bc';

export default class App extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async(latitude, longitude) => {
    const { 
      data:{
        main:{temp},
        weather
      } 
    } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({isLoading: false, temp: temp, condition: weather[0].main})
  }

  getLocation = async() => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    }
    catch (error) {
      Alert.alert("Can't find you");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const {isLoading, temp, condition} = this.state;
    return (
      isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />
    );
  } 
}
