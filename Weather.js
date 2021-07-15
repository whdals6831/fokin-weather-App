import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: []
    },
    Drizzle: {
        iconName: "",
        gradient: []
    },
    Rain: {
        iconName: "",
        gradient: []
    },
    Snow: {
        iconName: "",
        gradient: []
    },
    Atmosphere: {
        iconName: "",
        gradient: []
    },
    Clear: {
        iconName: "",
        gradient: []
    },
    Clouds: {
        iconName: "",
        gradient: []
    },
}

export default function Weather({temp, condition}) {
    return (
        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={90} color="white" />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.halfContainer}>

            </View>
      </LinearGradient>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Atmosphere', 'Clear', 'Clouds']).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 36,
        color: 'white'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});