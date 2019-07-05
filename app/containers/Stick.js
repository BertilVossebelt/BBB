import React from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';
import Weapon from "../components/Weapon";
import {mountWeapon, weaponDmg} from "../actions/index";
import {connect} from 'react-redux';

class Stick extends Weapon {
    mountWeapon = () => {
        let weapon = 'Stick';
        this.props.dispatch(mountWeapon(weapon));

        let dmg = 10;
        this.props.dispatch(weaponDmg(dmg));
    };

    render(name) {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image style={styles.image}
                           source={require('../img/Stick.png')}
                    />
                    <Text>Stick Damage: 10</Text>
                    <View style={styles.button}>
                        <View style={styles.row}>
                            <Button
                                onPress={this.mountWeapon}
                                title={'\nEquip Stick\n'}
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default connect()(Stick);
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