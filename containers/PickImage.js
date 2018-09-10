import React from 'react';
import { ImagePicker, } from 'expo';
import { StyleSheet, Text, View, CameraRoll, Image, ScrollView, Button,AppRegistry, TouchableHighlight } from 'react-native';
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
            <View>
              <TouchableHighlight onPress={this._pickImage}>
                <Image
                  source={require('../assets/picture.png')}
                  style={styles.icon}
                />
              </TouchableHighlight>
            </View>
        );
      }
    
      _pickImage = async () => {
        let deleteHash = ""
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
          base64: true,
        });
        callAPI.post(result.base64)
          .then((imgurResponse) => {
            deleteHash = imgurResponse.data.deletehash
            clarifaiCall.call(imgurResponse.data.link).then((clrafaiResponse) => {
              getGIF.call(clrafaiResponse).then((gifResponse) => {
                this.props.dispatch(addImage(gifResponse.data.images.downsized_medium.url))
                callAPI.delete(deleteHash)
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

