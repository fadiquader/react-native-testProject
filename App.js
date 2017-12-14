import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
    Dimensions,
  Text,
  View
} from 'react-native';
import MapExample from './src/MapExample';

export default class App extends Component<{}> {
    constructor() {
        super();
    }
  render() {
    return (
        <View style={ styles.container }>
            <MapExample />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {

    }
});
