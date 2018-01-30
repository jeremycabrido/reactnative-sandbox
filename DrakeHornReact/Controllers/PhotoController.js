import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

export default class PhotoController extends React.Component {
    static navigationOptions = {
      title: 'Photos',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
            <Text> What up?</Text>
            <Text> There should be a photo here </Text>
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
    }
});