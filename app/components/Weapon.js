import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {attack, enemyAttack} from "../actions";

class Weapon extends Component {
    attack = () => {
        let attackDmg = this.props.enemyHealth - this.props.dmg;
        this.props.dispatch(attack(attackDmg));
        this.enemyResponse();
    };

    enemyResponse = () => {
        let enemyDmg = this.props.playerHealth - 5;
        this.props.dispatch(enemyAttack(enemyDmg));
    };

    render() {
        return (
            <View>
                <Text style={{color: 'red'}}>Weapon Component:</Text>
                <Button
                    onPress={this.attack}
                    title={'Attack'}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    dmg: state.inventoryReducer.dmg,
    enemyHealth: state.setEnemyReducer.enemyHealth,
    playerHealth: state.playerReducer.playerHealth,
});

export default connect(mapStateToProps)(Weapon);