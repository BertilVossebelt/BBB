import React, {Component} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {addHealth, removeItem} from "../actions/index";
import {connect} from 'react-redux';

class HealthPotion extends Component {
    consume = () => {
        let maxHealth = 10;
        if (this.props.playerHealth < 100 - maxHealth) {
            let health = this.props.playerHealth + maxHealth;
            this.props.dispatch(addHealth(health));
            this.remove();
        } else if (this.props.playerHealth < 100) {
            for (let i = 0; i <= maxHealth; i++) {
                if (this.props.playerHealth + i === 100) {
                    this.props.dispatch(addHealth(this.props.playerHealth + i));
                    this.remove();
                    break;
                }
            }
        }
    };

    remove = () => {
        let newInventory = this.props.inventory;
        for (let i = 0; i < newInventory.length; i++) {
            if (newInventory[i].props.name === 'HealthPotion') {
                let deleted = newInventory.splice(i, 1);
                this.props.dispatch(removeItem(newInventory));
                break;
            }
        }
    };

    render(name) {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image style={styles.image}
                           source={require('../img/Healthpotion.png')}
                    />
                    <Text>Health Potion Health: 10</Text>
                    <View style={styles.button}>
                        <View style={styles.row}>
                        <Button
                            onPress={this.consume}
                            title={'\nConsume Health Potion'}
                        />
                        </View>
                    </View>
                </View>
            </View>



        );
    }
}

const mapStateToProps = (state) => ({
    playerHealth: state.playerReducer.playerHealth,
    inventory: state.inventoryReducer.items,
});

export default connect(mapStateToProps)(HealthPotion);
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
    },
    row: {
        flexDirection: 'row',
    },
    image: {
        height: 100,
        width: 100,
    },
    button: {
        height: 100,
        width: 100,
        marginRight: 90,
    }
});