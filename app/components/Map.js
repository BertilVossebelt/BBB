import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Tile from './Tile';
import Compass from './Compass';
import Shop from './Shop';
import {connect} from 'react-redux';

type Props = {};

class Map extends Component<Props> {
    //Generating the map using a for loop.
    constructor() {
        super();
        let map = [];
        for (let i = 0; i <= 35; i++) {
            map.push(i);
        }

        this.state = {
            Tile: 1,
            map: map,
        }
    };
    render(showTile) {
        return (
            <View>
                <View>
                    {/*The compass is used to move from one tile to another*/}
                    <Compass/>
                    {/*The tile component receives information about the tile*/}
                    <Tile key={this.props.currentTile} Tile={this.props.currentTile} hasPlayer={true}
                          hasObject={this.hasObject()} hasBiome={this.hasBiome()} hasEnemy={this.props.enemy}/>
                </View>
            </View>
        );
    }

    //Sets a building and passes the string to the Tile component.
    hasObject() {
        let objects = {
            1: 'House', 2: 'Village', 3: 'Shop', 4: 'Tree', 21: 'Outpost', 34: 'Well', 23: 'Village',
            8: 'Farm', 15: 'Farm', 35: 'Remote Village'
        };

        if (objects.hasOwnProperty(this.props.currentTile)) {
            return objects[this.props.currentTile];
        } else {
            return false;
        }
    }

    //Sets a biome and passes the string to the Tile component.
    hasBiome() {
        let biome = {
            1: 'Meadows',
            2: 'Meadows',
            3: 'Meadows',
            4: 'Forest',
            5: 'Forest',
            6: 'Meadows',
            7: 'Meadows',
            8: 'Meadows',
            9: 'Water',
            10: 'Meadows',
            11: 'Forest',
            12: 'Forest',
            13: 'Forest',
            14: 'Forest',
            15: 'Forest',
            16: 'Meadows',
            17: 'Meadows',
            18: 'Meadows',
            19: 'Meadows',
            20: 'Forest',
            21: 'Forest',
            22: 'Forest',
            23: 'Forest',
            24: 'Water',
            25: 'Water',
            26: 'Water',
            27: 'Water',
            28: 'Water',
            29: 'Water',
            30: 'Water',
            31: 'Dessert',
            32: 'Dessert',
            33: 'Dessert',
            34: 'Dessert',
            35: 'Dessert'
        };

        if (biome.hasOwnProperty(this.props.currentTile)) {
            return biome[this.props.currentTile];
        } else {
            return false;
        }
    }
}

const mapStateToProps = (state) => ({
    currentTile: state.move.currentTile,
    enemy: state.setEnemyReducer.enemy,
});

export default connect(mapStateToProps)(Map)