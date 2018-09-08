import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import CameraExample from './containers/Camera'
import PickImage from './containers/PickImage'
import ShowImage from './containers/ShowImage'
import { StyleSheet, Text, View, CameraRoll, Image, ScrollView, Button, AppRegistry, } from 'react-native';
const store = createStore(rootReducer)
import { createStackNavigator,} from 'react-navigation';

export class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Provider store={store}> 
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>ReverseCamera</Text>
          <PickImage />
          <Button
            title="Camera"
            onPress={() =>
              navigate('Camera')
            }/>
          <ShowImage />
        </View>
    </Provider>
    )
  }
}

const Screens = createStackNavigator({
  Home: { screen: App },
  Camera: { screen: CameraExample },
});
export default Screens;