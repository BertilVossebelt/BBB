import React, {Component} from "react";
import {connect} from "react-redux";
import {Button, Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {addItem, pay} from "../actions";
import Stick from '../containers/Stick';
import Sword from '../containers/Sword';
import HealthPotion from "./HealthPotion";

class Shop extends Component {
    /* Dispatches an item when you press the 'Buy' button to the
     inventoryReducer which adds it to the inventory. */
    buyStick = () => {
        let amount = this.props.coins - 2;
        if (!this.props.coins - amount <= 0) {
            let item = <Stick name={'Stick'}/>;
            this.props.dispatch(addItem(item));
            this.props.dispatch(pay(amount));
        }
    };
    buySword = () => {
        let amount = this.props.coins - 30;
        if (!this.props.coins - amount <= 0) {
            let item = <Sword name={'Sword'}/>;
            this.props.dispatch(addItem(item));
            this.props.dispatch(pay(amount));
        }
    };
    buyHealthPotion = () => {
        let amount = this.props.coins - 1;
        if (!this.props.coins - amount <= 0) {
            let item = <HealthPotion name={'HealthPotion'}/>;
            this.props.dispatch(addItem(item));
            this.props.dispatch(pay(amount));
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={{color: 'orange', fontSize: 25,}}>Balance: ${this.props.coins}</Text>
                <View style={styles.row}>
                    <Image style={styles.image}
                           source={require('../img/Stick.png')}
                    />
                    <Text>Damage: 10 Costs: $2</Text>
                    <View style={styles.button}>
                    <Button
                        onPress={this.buyStick}
                        title={'\nBuy\nStick\n'}
                    />
                    </View>
                </View>
                <View style={styles.row}>
                    <Image style={styles.image}
                           source={require('../img/Sword.png')}
                    />
                    <Text>Damage: 15 Costs: $30</Text>
                    <View style={styles.button}>
                        <Button
                            onPress={this.buySword}
                            title={'\nBuy\nSword\n'}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <Image style={styles.image}
                           source={require('../img/Healthpotion.png')}
                    />
                    <Text>Health: 10 Costs: $1</Text>
                   <View style={styles.button}>
                    <Button
                        onPress={this.buyHealthPotion}
                        title={'\nBuy\n Health Potion\n'}
                    />
                   </View>
                </View>
            </View>
        )
    };
}

const mapStateToProps = (state) => ({
    inventory: state.inventoryReducer.items,
    coins: state.playerReducer.coins
});

export default connect(mapStateToProps)(Shop);
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    image: {
        height: 100,
        width: 100,
    },
    row: {
        flexDirection: 'row',
        height: 100,
        width: 100,
        justifyContent: 'center',
    },
    button: {
        height: 100,
        width: 100,
    }
});