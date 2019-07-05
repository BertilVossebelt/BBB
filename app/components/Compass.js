import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {moveEast, moveNorth, moveSouth, moveWest, setEnemy} from "../actions";
import {EAST, NORTH, SOUTH, WEST} from "../actions/CompassActions";


class Compass extends Component {
    /*Checks the directions that you are allowed to move to and changes the possible_directions variable
    depending on that.*/
    getPossibleDirections = () => {
        let grid_size = 35;
        let grid_width = 7;
        let possible_directions = [NORTH, EAST, SOUTH, WEST];

        if (this.props.enemy === true) {
            possible_directions = [];
        } else if (this.props.currentTile === 1) {
            //Upper left corner is hard coded.
            possible_directions = [EAST, SOUTH];
        } else if (this.props.currentTile === grid_width) {
            possible_directions = [WEST, SOUTH];
        } else if (this.props.currentTile === grid_size - grid_width + 1) {
            possible_directions = [NORTH, EAST];
        } else if (this.props.currentTile === grid_size) {
            possible_directions = [NORTH, WEST];
        } else if (this.props.currentTile > grid_size - grid_width && this.props.currentTile <= grid_size) {
            possible_directions = [NORTH, WEST, EAST];
        } else if (this.props.currentTile > 1 && this.props.currentTile < grid_width) {
            possible_directions = [WEST, EAST, SOUTH];
        } else if (this.props.currentTile % grid_width === 0) {
            possible_directions = [NORTH, SOUTH, WEST];
        } else if (this.props.currentTile % grid_width === 1) {
            possible_directions = [NORTH, EAST, SOUTH];
        }
        this.setEnemy();
        return possible_directions;
    };
    //Calculates the chance an enemy will spawn. If an enemy spawns, it returns true to the Tile component.
    setEnemy = () => {
        if (this.props.enemy === false) {
            //If the random number = 0 out of 3, the enemy will spawn = 33,33% chance.
            let randomNumber = Math.floor(Math.random() * 2);
            if (randomNumber === 0) {
                let enemy = true;
                this.props.dispatch(setEnemy(enemy));
            } else {
                let enemy = false;
                this.props.dispatch(setEnemy(enemy));
            }
        }
    };
    moveEast = () => {
        let possibleDirections = this.getPossibleDirections();
        /*
          checks if east is in the array if it is true it adds 1 to current Tile
          if it is not in the array it returns a error.
        */

        if (possibleDirections.includes(EAST)) {
            let d = this.props.currentTile + 1;
            this.props.dispatch(moveEast(d));
            this.setState({error: false, enemy: false})
        } else {
            this.errors()
        }
    };
    moveWest = () => {
        /*
         checks if west is in the array if it is true it minus 1 to current Tile
         if it is not in the array it returns a error.
        */
        let possibleDirections = this.getPossibleDirections()
        if (possibleDirections.includes(WEST)) {

            let d = this.props.currentTile - 1;
            this.props.dispatch(moveWest(d));
            this.setState({error: false, enemy: false})
        } else {
            this.errors()
        }
    };
    moveNorth = () => {
        /*
         checks if north is in hte array if it is true it minus 7 to current Tile
         if it is not in the array it returns a error.
        */
        let possibleDirections = this.getPossibleDirections()
        if (possibleDirections.includes(NORTH)) {
            let d = this.props.currentTile - 7;
            this.props.dispatch(moveNorth(d));
            this.setState({error: false, enemy: false})
        } else {
            this.errors()
        }
    };
    moveSouth = () => {
        /*
         checks if west is in the array if it is true it adds 1 to current Tile
         if it is not in the array it returns a error.
        */
        let possibleDirections = this.getPossibleDirections()
        if (possibleDirections.includes(SOUTH)) {
            let d = this.props.currentTile + 7;
            this.props.dispatch(moveSouth(d));
            this.setState({error: false, enemy: false})
        } else {
            this.errors()
        }
    };
    errors = () => {
        if (this.props.enemy === false) {
            this.setState({error: true})
        } else {
            this.setState({enemy: true})
        }
    };

    constructor() {
        super();
        this.state = {
            error: false,
        }
    }

    render() {
        return (
            <View>
                <View style={styles.flexContainer}>


                    <View style={styles.row}>
                        <TouchableHighlight
                            onPress={() => this.moveWest()}
                            style={styles.button}
                            color="#1e6884"
                        >
                            <Text style={styles.TouchText2}>WEST</Text>
                        </TouchableHighlight>
                        <View style={styles.column}>
                            <TouchableHighlight
                                onPress={() => this.moveNorth()}
                                style={styles.button}
                                color="#1e6884"
                            >
                                <Text style={styles.TouchText}>NORTH</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={styles.button}
                                color="#1e6884"
                            >
                                <Text>MOVE</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.moveSouth()}
                                style={styles.button}
                                color="#1e6884"
                            >
                                <Text style={styles.TouchText}>SOUTH</Text>
                            </TouchableHighlight>
                        </View>
                        <TouchableHighlight
                            onPress={() => this.moveEast()}
                            style={styles.button}
                            color="#1e6884"
                        >
                            <Text style={styles.TouchText2}>EAST</Text>
                        </TouchableHighlight>

                    </View>


                </View>
                {this.state.error && (
                    <Text style={{color: 'red'}}>Edge of map</Text>
                )}
                {this.state.enemy && (
                    <Text style={{color: 'red'}}>Defeat the enemy first!</Text>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flexContainer: {
        paddingHorizontal: 20,
        paddingVertical: 300,
        position: 'absolute'
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column'
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 18,
        width: 100

    },

    button2: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 18,
        height: 50

    },
    TouchText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
    },
    TouchText2: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        marginTop: 56
    }


});


const mapStateToProps = (state) => ({
    currentTile: state.move.currentTile,
    enemy: state.setEnemyReducer.enemy,
});

export default connect(mapStateToProps)(Compass)