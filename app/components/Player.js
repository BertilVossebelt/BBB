import React, {Component} from 'react';
import {connect} from "react-redux";
import {Text, View} from 'react-native';
import Weapon from "./Weapon";
import {gameOver} from "../actions";

class Player extends Component {
    componentDidUpdate() {
        if (this.props.playerHealth <= 0) {
            let game = true;
            this.props.dispatch(gameOver(game));
        }
    };

    render() {
        return (
            <View>
                <Text style={{color: 'red'}}>Player Component:</Text>
                <Text style={{color: 'orange'}}>Balance: ${this.props.coins}</Text>
                <Text>Current location: {this.props.currentTile}</Text>
                <Text style={{color: 'purple'}}>Player HP: {this.props.playerHealth}</Text>
                <Text>Weapon: {this.props.weapon}</Text>
                {this.props.enemy && (
                    <Weapon/>
                )}
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    currentTile: state.move.currentTile,
    playerHealth: state.playerReducer.playerHealth,
    weapon: state.inventoryReducer.weapon,
    enemy: state.setEnemyReducer.enemy,
    coins: state.playerReducer.coins,
});

export default connect(mapStateToProps)(Player)