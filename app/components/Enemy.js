import React, {Component} from 'react';
import {connect} from "react-redux";
import {Text, View} from 'react-native';
import {receive, setEnemy} from "../actions";

class Enemy extends Component {
    componentDidUpdate() {
        if (this.props.enemyHealth <= 0) {
            let enemy = false;
            this.props.dispatch(setEnemy(enemy));

            let payment = this.props.coins + 10;
            this.props.dispatch(receive(payment));
        }
    }

    render() {
        return (
            <View>
                <Text style={{color: 'red'}}>Enemy Component:</Text>
                <Text>Enemy: Gnome</Text>
                <Text style={{color: 'purple'}}>Enemy HP: {this.props.enemyHealth}</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    enemyHealth: state.setEnemyReducer.enemyHealth,
    coins: state.playerReducer.coins,
});

export default connect(mapStateToProps)(Enemy)
