//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
// create a component
class MainScreen extends Component {
    state = {
        icon1: 'circle',
        icon2: 'circle',
        icon3: 'circle',
        icon4: 'circle',
        icon5: 'circle',
        icon6: 'circle',
        icon7: 'circle',
        icon8: 'circle',
        icon9: 'circle',
        icon10: 'circle',
        icon11: 'circle',
        icon12: 'circle',
        icon13: 'circle',
        icon14: 'circle',
        icon15: 'circle',
        icon16: 'circle',
        icon17: 'circle',
        icon18: 'circle',
        icon19: 'circle',
        icon20: 'circle',
        icon21: 'circle',
        icon22: 'circle',
        icon23: 'circle',
        icon24: 'circle',
        icon25: 'flag-checkered',
        turn: 0,
        dice: 0,
        playerOnePosition: 0,
        playerTwoPosition: 0,
        notification: 'Please roll the dice',
        buttonRollDisabled: false,
    }
    handlerButtonDice () {
        console.log('button1')
        let rolledDice = Math.floor(Math.random() * 6)+1
        console.log(rolledDice, ' rolledDice')
        if (this.state.turn===0) {
            let position = this.state.playerOnePosition+rolledDice
            if (position===25) {
                alert('Player 1 Win the game')
                let notif = 'player 1 rolled '+rolledDice
                    this.setState({
                        ...this.state,
                        ['icon'+this.state.playerOnePosition]: 'circle' ,
                        playerOnePosition: position,
                        turn: 1,
                        ['icon'+position]: 'android',
                        notification: notif
                    })
                    this.props.navigation.navigate('GameOver')
            }
            else {
                if (position>25) {
                    position= position - 25
                    let notif = 'Terlewat! Mundur '+position+' kotak'
                    position= 25 - position
                    this.setState({
                        ['icon'+this.state.playerOnePosition]: 'circle' ,
                        playerOnePosition: position,
                        turn: 1,
                        ['icon'+position]: 'android',
                        notification: notif
                    })
                }
                else {
                    let notif = 'player 1 rolled '+rolledDice
                    this.setState({
                        ...this.state,
                        ['icon'+this.state.playerOnePosition]: 'circle' ,
                        playerOnePosition: position,
                        turn: 1,
                        ['icon'+position]: 'android',
                        notification: notif
                    })
                } 
            }
        }

        else if (this.state.turn===1) {
            let position = this.state.playerTwoPosition+rolledDice
            if (position===25) {
                alert('Player 2 Win the game')
                let notif = 'player 2 rolled '+rolledDice
                    this.setState({
                        ...this.state,
                        ['icon'+this.state.playerTwoPosition]: 'circle' ,
                        playerTwoPosition: position,
                        turn: 1,
                        ['icon'+position]: 'apple',
                        notification: notif
                    })
                    this.props.navigation.navigate('GameOver')
            }
            else {
                if (position>25) {
                    position= position - 25
                    let notif = 'Terlewat! Mundur '+position+' kotak'
                    position= 25 - position
                    this.setState({
                        ['icon'+this.state.playerTwoPosition]: 'circle' ,
                        playerTwoPosition: position,
                        turn: 0,
                        ['icon'+position]: 'apple',
                        notification: notif
                    })
                }
                else {
                    let notif = 'player 2 rolled '+rolledDice
                    this.setState({
                        ...this.state,
                        ['icon'+this.state.playerTwoPosition]: 'circle' ,
                        playerTwoPosition: position,
                        turn: 0,
                        ['icon'+position]: 'apple',
                        notification: notif
                    })
                } 
            }
        }
        console.log(this.state.playerOnePosition, ' player one position')
        console.log(this.state.playerTwoPosition, ' player 2 position ')
        console.log('Player',this.state.turn++,'turn')
    }
    render() {
        return (
            <View style={styles.container}>
               {/* ROW 1  */}
                <View style={styles.buttonContainer} > 
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon25} style={styles.icon} />
                        <Text style={styles.text} > 25 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon24} style={styles.icon} />
                        <Text style={styles.text} > 24 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon23} style={styles.icon} />
                        <Text style={styles.text} > 23 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >   
                        <Icon size={50} color={'white'} name={this.state.icon22} style={styles.icon} />
                        <Text style={styles.text} > 22 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon21} style={styles.icon} />
                        <Text style={styles.text} > 21 </Text>
                    </TouchableOpacity>
                </View>

                {/* ROW 2  */}

                <View style={styles.buttonContainer} > 
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon20} style={styles.icon} />
                        <Text style={styles.text} > 20 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon19} style={styles.icon} />
                        <Text style={styles.text} > 19 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon18} style={styles.icon} />
                        <Text style={styles.text} > 18 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon17} style={styles.icon} />
                        <Text style={styles.text} > 17 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon16} style={styles.icon} />
                        <Text style={styles.text} > 16</Text>
                    </TouchableOpacity>
                </View>

                {/* ROW 3  */}

                <View style={styles.buttonContainer} > 
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon11} style={styles.icon} />
                        <Text style={styles.text} > 11 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon12} style={styles.icon} />
                        <Text style={styles.text} > 12 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon13} style={styles.icon} />
                        <Text style={styles.text} > 13 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon14} style={styles.icon} />
                        <Text style={styles.text} > 14 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon15} style={styles.icon} />
                        <Text style={styles.text} > 15 </Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.buttonContainer} > 
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon10} style={styles.icon} />
                        <Text style={styles.text} > 10 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon9} style={styles.icon} />
                        <Text style={styles.text} > 9 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon8} style={styles.icon} />
                        <Text style={styles.text} > 8 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon7} style={styles.icon} />
                        <Text style={styles.text} > 7 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon6} style={styles.icon} />
                        <Text style={styles.text} > 6 </Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.buttonContainer} > 
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon1} style={styles.icon} />
                        <Text style={styles.text} > 1 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon2} style={styles.icon} />
                        <Text style={styles.text} > 2 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon3} style={styles.icon} />
                        <Text style={styles.text} > 3 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon4} style={styles.icon} />
                        <Text style={styles.text} > 4 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={this.state.icon5} style={styles.icon} />
                        <Text style={styles.text} > 5 </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer} > 
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={'android'} style={styles.iconPlayer} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                    style={styles.buttomMain} 
                    >
                        <Icon size={50} color={'white'} name={'apple'} style={styles.iconPlayer} />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                <Text style={styles.player} >  One </Text>
                <Text style={styles.player}>  Two </Text>
                </View>


                <Button onPress={ ()=> this.handlerButtonDice()} title={'Roll Dice!'} />
                <View style={styles.container}> 
                <Text style={styles.textNotif} > {this.state.notification} </Text>
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
        backgroundColor: '#42ebf4',
    },
    buttonContainer: {
        flexDirection: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttomMain: {
        width: 50,
        height: 50,
        margin: 5,
        backgroundColor: '#418ff4'
    },
    icon: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 3,
        marginRight: 'auto',
        position: 'absolute',
        backgroundColor: '#418ff4'
    },
    text: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    textNotif: {
        fontSize: 32,
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    iconPlayer: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#418ff4'
    },
    player: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    }
});

//make this component available to the app
export default MainScreen;
