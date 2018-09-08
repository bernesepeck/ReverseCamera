import React from 'react';
import { ImagePicker, } from 'expo';
import { StyleSheet, Text, View, CameraRoll, Image, ScrollView, Button,AppRegistry } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addImage, addWords } from '../actions';
import { callAPI, clarifaiCall, getGIF } from '../api';


class PickImage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {imgurLink: ""};
    }
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
          base64: true,
        });
        callAPI.post(result.base64)
          .then((imgurResponse) => {
            
            clarifaiCall.call(imgurResponse.data.link).then((clrafaiResponse) => {
              getGIF.call(clrafaiResponse).then((gifResponse) => {
                console.log(gifResponse.data.images.downsized.url)
                this.props.dispatch(addImage(gifResponse.data.images.downsized.url))
              }
              )
            })
          })
      };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(addImage, addWords, dispatch) }
}
export default connect(mapDispatchToProps)(PickImage);

