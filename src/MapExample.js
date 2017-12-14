/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
    Text,
    View
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
let { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class MapExample extends Component<{}> {
    constructor() {
        super();
        // Error:Failed to crunch file E:\react-native-projects\testProject\node_modules\react-native-maps\lib\android\build\intermediates\exploded-aar\com.google.android.gms\play-services-base\10.2.4\res\drawable-xxhdpi-v4\common_google_signin_btn_icon_light_normal_background.9.png into E:\react-native-projects\testProject\node_modules\react-native-maps\lib\android\build\intermediates\res\merged\androidTest\debug\drawable-xxhdpi-v4\common_google_signin_btn_icon_light_normal_background.9.png
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        };
    }
    render() {
        return (
            <View style={ styles.container }>
                <MapView
                    provider={ PROVIDER_GOOGLE }
                    style={ styles.map }
                    showsUserLocation={ true }
                    region={ this.state.region }
                    onRegionChange={ region => this.setState({region}) }
                    onRegionChangeComplete={ region => this.setState({region}) } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
