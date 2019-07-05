import React from 'react';
import {Text, View, Button, Image, StyleSheet} from 'react-native';
import Weapon from "../components/Weapon";
import {mountWeapon, weaponDmg} from "../actions/index";
import {connect} from 'react-redux';

class BareHands extends Weapon {
    mountWeapon = () => {
        let weapon = 'Bare Hands';
        this.props.dispatch(mountWeapon(weapon));

        let dmg = 1;
        this.props.dispatch(weaponDmg(dmg));
    };

    render(name) {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image style={styles.image}
                           source={require('../img/Stick.png')}
                    />
                    <Text>Bare Hands  Damage: 1</Text>
                    <View style={styles.button}>
                        <View style={styles.row}>
                        <Button
                            onPress={this.mountWeapon}
                            title={'\nEquip\nBare Hands'}
                        />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default connect()(BareHands);
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