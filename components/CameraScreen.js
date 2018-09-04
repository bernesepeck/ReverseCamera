import React from 'react';
import { StyleSheet, Text, View, CameraRoll, Image, ScrollView, Button,AppRegistry } from 'react-native';

export default class CameraScreen extends React.Component {
    state = {
        image: null,
      };
      
      render() {
        let { image } = this.state;
    
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
              title="Pick an image from camera roll"
              onPress={this._pickImage}
            />
            {image &&
              <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          </View>
        );
      }
    
      _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      };
}

