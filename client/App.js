/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import WelcomeScreen from './src/containers/WelcomeScreen/WelcomeScreen'
// import MainScreen from './src/containers/MainScreen/MainScreen'
// import GameOverScreen from './src/containers/GameOverScreen/GameOverScreen'
// import {createStackNavigator} from 'react-navigation'

// const RootStack = createStackNavigator(
//   {
//     Welcome: WelcomeScreen,
//     Main: MainScreen,
//     GameOver: GameOverScreen
//   },
//   {
//     initialRouteName : 'Welcome'
//   }
// )
export default class App extends Component {
  render() {
    return (
      // <RootStack/>
      <View> 
        <Text> Test </Text>
        <Text> Test </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
