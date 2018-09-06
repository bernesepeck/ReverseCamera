import React from 'react'
import PickImage from './containers/PickImage'
import ShowImage from './containers/ShowImage'
import { StyleSheet, Text, View, CameraRoll, Image, ScrollView, Button, AppRegistry, } from 'react-native';

const Main = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ReverseCamera</Text>
      <PickImage />
      <ShowImage />
    </View>
  )

export default Main