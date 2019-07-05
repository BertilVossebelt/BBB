import React, {Component} from 'react';
import {View} from 'react-native';
import Navigation from './app/navigation';
import {Provider} from 'react-redux';
import store from './app/store/store'

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={{margin: 10}}>
                <Provider store={store}>
                    <Navigation/>
                </Provider>
            </View>
        );
    }
}