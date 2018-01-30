import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import Sound from 'react-native-sound'

const horn = new Sound('air-horn-club-sample_1.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + horn.getDuration() + 'number of channels: ' + horn.getNumberOfChannels());
});

export default class HornController extends React.Component {
    
    isPlaying = false

    static navigationOptions = {
      title: 'Home',
    };

    constructor(props) {
        super(props);
        Sound.setCategory('Playback', true); // true = mixWithOthers
    }

    onPress = () => {
        horn.stop(() => {
        // Note: If you want to play a sound after stopping and rewinding it,
        // it is important to call play() in a callback.
        horn.play();
      });
    }
    
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
            Drake Horn React
            </Text>
            <TouchableHighlight activeOpacity={0.4}
            style={styles.button}
            onPress={this.onPress}>
            <Image style={{width:100, height:100}} resizeMode='cover' source={require('/Users/Jeremy/workspace/reactnative-sandbox/DrakeHornReact/button.png')}/>
            </TouchableHighlight>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
});