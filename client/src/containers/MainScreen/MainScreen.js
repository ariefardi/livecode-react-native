//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
// create a component
class MainScreen extends Component {
    handlerButtonOne () {
        console.log('button1')
    }
    render() {
        return (
            <View style={styles.container}>
               {/* ROW 1  */}
                <View style={styles.buttonContainer} > 
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={'circle'} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                </View>

                {/* ROW 2  */}

                <View style={styles.buttonContainer} > 
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                </View>

                {/* ROW 3  */}

                <View style={styles.buttonContainer} > 
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                </View>


                <View style={styles.buttonContainer} > 
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer} > 
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.handlerButtonOne}
                    style={styles.buttomMain} 
                    >
                    </TouchableOpacity>
                </View>
                <Button onPress={this.handlerButtonOne} title={'Roll Dice!'} />
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
        flexDirection: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttomMain: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        margin: 5
    },
    icon: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

//make this component available to the app
export default MainScreen;
