import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {LinearGradient} from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
      colors: ["#00C6FB", "#005BEA"],
      title: "그지같이 비가온다",
      subtitle: "얼마나 오는지 보려면 밖을 봐",
      icon: "weather-rainy"
    },
    Clear: {
      colors: ["#FEF253", "#FF7300"],
      title: "밖은 더우니 선글라스 챙겨",
      subtitle: "더우니까 나가지말라니께",
      icon: "weather-sunny"
    },
    Thunderstorm: {
      colors: ["#00ECBC", "#007ADF"],
      title: "집밖은 위험해",
      subtitle: "나가지말라고 경고했다",
      icon: "weather-lightning"
    },
    Clouds: {
      colors: ["#D7D2CC", "#304352"],
      title: "구름꼈어..",
      subtitle: "우울해...",
      icon: "weather-cloudy"
    },
    Snow: {
      colors: ["#7DE2FC", "#B9B6E5"],
      title: "추워...",
      subtitle: "추울땐 냉면?",
      icon: "weather-snowy"
    },
    Drizzle: {
      colors: ["#89F7FE", "#66A6FF"],
      title: "비가 부슬부슬",
      subtitle: "우산 챙길라면 챙기고",
      icon: "weather-hail"
    },
    Haze: {
      colors: ["#89F7FE", "#66A6FF"],
      title: "밖은 안보여",
      subtitle: "안보이니까 나가지마",
      icon: "weather-hail"
    },
    Mist: {
      colors: ["#D7D2CC", "#304352"],
      title: "안개!",
      subtitle: "운전조심",
      icon: "weather-fog"
    }
  };
  
  function Weather({ weatherName, temp }) {
    return (
      <LinearGradient
        colors={weatherCases[weatherName].colors}
        style={styles.container}
      >
        <View style={styles.upper}>
          <MaterialCommunityIcons
            color="white"
            size={144}
            name={weatherCases[weatherName].icon}
          />
          <Text style={styles.temp}>{temp}º</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
          <Text style={styles.subtitle}>
            {weatherCases[weatherName].subtitle}
          </Text>
        </View>
      </LinearGradient>
    );
  }
  
  Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
  };
  
  export default Weather;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    upper: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent"
    },
    temperature: {
      fontSize: 48,
      color: "white",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent"
    },
    temp: {
      fontSize: 48,
      backgroundColor: "transparent",
      color: "white",
      marginTop: 10
    },
    lower: {
      flex: 1,
      alignItems: "flex-start",
      justifyContent: "flex-end",
      paddingLeft: 25,
      paddingRight: 25
    },
    title: {
      fontSize: 38,
      backgroundColor: "transparent",
      color: "white",
      marginBottom: 10,
      fontWeight: "300"
    },
    subtitle: {
      marginBottom: 100,
      backgroundColor: "transparent",
      color: "white",
      fontSize: 24
    }
  });