import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import { TabNavigator } from 'react-navigation';
import HornController from './Controllers/HornController';
import PhotoController from './Controllers/PhotoController';

export const Tabs = TabNavigator({
  Home: {
    screen: HornController,
  },
  Photo: {
    screen: PhotoController,
  },
});

export default class App extends Component<{}> {
  render() {
    return <Tabs />;
  }
}

