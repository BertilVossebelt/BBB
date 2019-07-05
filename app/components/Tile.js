import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Enemy from "./Enemy";
import Player from "./Player";
import {connect} from "react-redux";

class Tile extends Component {
    //If the Tile component receives true from map, it returns 'Player'.
    renderPlayer() {
        const hasPlayer = this.props.hasPlayer;
        if (hasPlayer) {
            return <Player/>
        }
    }

    //If the Tile component receives true from map, it returns the enemy component.
    renderEnemy() {
        const hasEnemy = this.props.hasEnemy;
        if (hasEnemy) {
            return <Enemy/>
        }
    }

    //If the Tile component receives true from map, it returns the value that is passed on.
    renderBuilding() {
        const hasObject = this.props.hasObject;
        if (hasObject !== false) {
            return hasObject;
        }
    }

    //If the Tile component receives true from map, it returns the value that is passed on.
    renderBiome() {
        const hasBiome = this.props.hasBiome;
        if (hasBiome !== false) {
            return hasBiome;
        }
    }

    //Renders everything on screen.
    render() {
        return (
            <View>
                {this.renderPlayer()}
                <Text style={{color: 'red'}}>Tile Component:</Text>
                <Text>Biome: {this.renderBiome()}</Text>
                <Text>Object: {this.renderBuilding()}</Text>
                {this.renderEnemy()}
            </View>
        )
    }
}

export default connect()(Tile);