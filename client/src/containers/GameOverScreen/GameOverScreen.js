//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

// create a component
class GameOverScreen extends Component {
    goToHomeScreen () {
        console.log('Back To Welcome SCreen')
        alert('Back To Home')
        this.props.navigation.navigate('Welcome')
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.TextGame} > Game Over </Text>
                <View style={styles.buttonContainer} >
                <Button onPress={()=> this.goToHomeScreen() } title={'Play Again?'} />
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
    buttonContainer: {
        marginTop: 20
    },
    TextGame: {
        fontSize: 32,
        fontWeight: 'bold'
    }
});

//make this component available to the app
export default GameOverScreen;
