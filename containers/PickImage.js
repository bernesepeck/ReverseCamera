import React from 'react';
import { ImagePicker } from 'expo';
import { StyleSheet, Text, View, CameraRoll, Image, ScrollView, Button,AppRegistry } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addImage } from '../actions';


class PickImage extends React.Component {
      
      render() {
    
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
              title="Pick an image from camera roll"
              onPress={this._pickImage}
            />
          </View>
        );
      }
    
      _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
        this.props.dispatch(addImage(result.uri))
        //console.log(result.uri);
      };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(addImage, dispatch) }
}
export default connect(mapDispatchToProps)(PickImage);

