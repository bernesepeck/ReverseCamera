import React, { Component } from 'react';
import { StyleSheet, Text, View, CameraRoll, Image, ScrollView, Button,AppRegistry } from 'react-native';
import { ImagePicker } from 'expo';
import CameraScreen from './components/CameraScreen';


export default class App extends React.Component {
  
  render() {
    return (
      <CameraScreen></CameraScreen>
    );
  }
};