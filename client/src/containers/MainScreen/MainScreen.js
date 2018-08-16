//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
// create a component
class MainScreen extends Component {
    state = {
        icon1: 'android',
        icon2: 'apple',
        icon3: '',
        icon4: '',
        icon5: '',
        icon6: '',
        icon7: '',
        icon8: '',
        icon9: '',
        icon10: '',
        icon11: '',
        icon12: '',
        icon13: '',
        icon14: '',
        icon15: '',
        icon16: '',
        icon17: '',
        icon18: '',
        icon19: '',
        icon20: '',
        icon21: '',
        icon22: '',
        icon23: '',
        icon24: '',
        icon25: '',
        turn: 0,
        dice: 0,
    }
    handlerButtonDice () {
        console.log('button1')
    }
    render() {
        return (
            <View style={styles.container}>
               {/* ROW 1  */}
                <View style={styles.buttonContainer} > 
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon25} style={styles.icon} />
                        <Text style={styles.text} > 25 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon24} style={styles.icon} />
                        <Text style={styles.text} > 24 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon23} style={styles.icon} />
                        <Text style={styles.text} > 23 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >   
                        <Icon size={50} name={this.state.icon22} style={styles.icon} />
                        <Text style={styles.text} > 22 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.ico215} style={styles.icon} />
                        <Text style={styles.text} > 21 </Text>
                    </TouchableOpacity>
                </View>

                {/* ROW 2  */}

                <View style={styles.buttonContainer} > 
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon20} style={styles.icon} />
                        <Text style={styles.text} > 20 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon19} style={styles.icon} />
                        <Text style={styles.text} > 19 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon18} style={styles.icon} />
                        <Text style={styles.text} > 18 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon17} style={styles.icon} />
                        <Text style={styles.text} > 17 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon16} style={styles.icon} />
                        <Text style={styles.text} > 16</Text>
                    </TouchableOpacity>
                </View>

                {/* ROW 3  */}

                <View style={styles.buttonContainer} > 
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon11} style={styles.icon} />
                        <Text style={styles.text} > 11 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon12} style={styles.icon} />
                        <Text style={styles.text} > 12 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon13} style={styles.icon} />
                        <Text style={styles.text} > 13 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon5} style={styles.icon} />
                        <Text style={styles.text} > 14 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon15} style={styles.icon} />
                        <Text style={styles.text} > 15 </Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.buttonContainer} > 
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon10} style={styles.icon} />
                        <Text style={styles.text} > 10 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon9} style={styles.icon} />
                        <Text style={styles.text} > 9 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon8} style={styles.icon} />
                        <Text style={styles.text} > 8 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon7} style={styles.icon} />
                        <Text style={styles.text} > 7 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon6} style={styles.icon} />
                        <Text style={styles.text} > 6 </Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.buttonContainer} > 
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon1} style={styles.icon} />
                        <Text style={styles.text} > 1 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon2} style={styles.icon} />
                        <Text style={styles.text} > 2 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon3} style={styles.icon} />
                        <Text style={styles.text} > 3 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon4} style={styles.icon} />
                        <Text style={styles.text} > 4 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} name={this.state.icon5} style={styles.icon} />
                        <Text style={styles.text} > 5 </Text>
                    </TouchableOpacity>
                </View>


                <Button onPress={this.handlerButtonDice} title={'Roll Dice!'} />
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
        marginLeft: 5,
        marginRight: 'auto',
        position: 'absolute'
    },
    text: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});

//make this component available to the app
export default MainScreen;
