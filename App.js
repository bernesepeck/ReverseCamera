import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import PickImage from './containers/PickImage'
import ShowImage from './containers/ShowImage'
import styles from './StyleSheet'
import { StyleSheet, Text, View, CameraRoll, Image, ScrollView, Button, AppRegistry, Header, } from 'react-native';
const store = createStore(rootReducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={[styles.container]}>
          <View style={[styles.header]}>
            <Text style={[styles.headerText]}>ReverseCamera</Text>
          </View>
          <View style={[styles.buttonContainer]}>
            <PickImage />
          </View>
          <View style={[styles.gifContainer]}>
            <ShowImage />
          </View>
        </View>
    </Provider>
    )
  }
}

