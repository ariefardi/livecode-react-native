//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class WelomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcomeHome} >Welcome to Snake 'N Ladder Game</Text>
                <View style={styles.buttonHome}>
                <Button onPress={()=> this.props.navigation.navigate('Main')} title={'Play Game'} /> 
                </View>  
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    welcomeHome: {
        fontSize: 22,
        fontWeight: 'bold'
    },
   buttonHome: {
       marginTop: 20,
       marginRight: 20
   } 
});

//make this component available to the app
export default WelomeScreen;
