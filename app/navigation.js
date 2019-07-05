import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import Map from './components/Map';
import Shop from './components/Shop'
import Inventory from './components/Inventory'
import {connect} from "react-redux";
import {gameOver, startOver} from "./actions";

type Props = {};

class Navigation extends Component<Props> {
    constructor() {
        super();
        this.state = {
            map: true,
            shop: false,
            inventory: false,
            gameOver: false,
        }
    }

    mapShop = () => {
        this.setState({shop: true, map: false});
    };
    mapInventory = () => {
        this.setState({inventory: true, map: false});
    };
    shopMap = () => {
        this.setState({map: true, shop: false});
    };
    shopInventory = () => {
        this.setState({inventory: true, shop: false});
    };
    inventoryMap = () => {
        this.setState({map: true, inventory: false});
    };
    inventoryShop = () => {
        this.setState({shop: true, inventory: false});
    };

    componentDidUpdate() {
        if (this.props.gameOver === true) {
            let game = false;
            this.props.dispatch(gameOver(game));
            this.setState({shop: false, inventory: false, map: false, gameOver: true});
        }
    }

    startOver = () => {
        this.setState({shop: false, inventory: false, map: true, gameOver: false});
        this.props.dispatch(startOver());
    };

    render() {
        return (
            <View>
                {this.state.map && (
                    <View>
                        <View style={{marginBottom: 30}}>
                            <Button
                                title={'Inventory'}
                                onPress={this.mapInventory}
                                color={'red'}
                            />
                            <Button
                                title={'Shop'}
                                onPress={this.mapShop}
                                color={'red'}
                            />
                        </View>
                        <Map/>
                    </View>
                )}
                {this.state.shop && (
                    <View>
                        <View style={{marginBottom: 30}}>
                            <Button
                                title={'Outside'}
                                onPress={this.shopMap}
                                color={'red'}
                            />
                            <Button
                                title={'Inventory'}
                                onPress={this.shopInventory}
                                color={'red'}
                            />
                        </View>
                        <Shop/>
                    </View>
                )}
                {this.state.inventory && (
                    <View>
                        <View style={{marginBottom: 30}}>
                            <Button
                                title={'Outside'}
                                onPress={this.inventoryMap}
                                color={'red'}
                            />
                            <Button
                                title={'Shop'}
                                onPress={this.inventoryShop}
                                color={'red'}
                            />
                        </View>
                        <Inventory/>
                    </View>
                )}
                {this.state.gameOver && (
                    <View>
                        <Text style={{
                            color: 'red',
                            fontWeight: 'bold',
                            fontSize: 20,
                            textAlign: 'center',
                            marginTop: 200
                        }}>GAME OVER</Text>
                        <Button title={'Start Over'} onPress={this.startOver}/>
                    </View>
                )}
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    gameOver: state.playerReducer.gameOver,
});

export default connect(mapStateToProps)(Navigation);