import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import BareHands from "../containers/BareHands";
import HealthPotion from "./HealthPotion";

class Inventory extends Component {
    render() {
        console.log();
        return (
        <View style={styles.container}>
                <Text>Inventory:</Text>
            <View style={styles.row}>
                <BareHands/>
            </View>
                {/*Renders the item according to the render function in the components.*/}
                {this.props.inventory}
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    //Loops trough all of the items in the inventory
    inventory: state.inventoryReducer.items.map(i => i),
});

export default connect(mapStateToProps)(Inventory);
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    image: {
        height: 100,
        width: 100,
    },
    row: {
        flexDirection: 'row',
        height: 100,
        width: 100,
        justifyContent: 'center',
    },
    button: {
        height: 100,
        width: 100,
    }
});
