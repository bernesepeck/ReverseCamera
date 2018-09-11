import React from 'react';
import { ImagePicker, } from 'expo';
import {  Text, View, CameraRoll, Image, ScrollView, Button,AppRegistry, TouchableHighlight } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addImage } from '../actions';
import { callAPI, clarifaiCall, getGIF } from '../api';


class PickImage extends React.Component {
    //Cunstroctor to get props from Provider
    constructor(props) {
      super(props);
      this.state = {imgurLink: ""};
    }
      render() {
        return (
          //Button with Icon on Press it uses Function Pick Image
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
      
      //Function to Pick Image
      _pickImage = async () => {
        //Variable to save Delete Hash for Imgur
        let deleteHash = ""
        //Pick Image, Save
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
          base64: true,
        });
        //Call Imgur API with Base64 of choosen picture
        callAPI.post(result.base64)
          .then((imgurResponse) => {
            //Save delete Hash for later
            deleteHash = imgurResponse.data.deletehash
            //Call Clarifai API with the Link of Imgur
            clarifaiCall.call(imgurResponse.data.link).then((clrafaiResponse) => {
              //Call Giphy API to Search GIF with Words return by Clarifai
              getGIF.call(clrafaiResponse).then((gifResponse) => {
                //Add Image to Store
                this.props.dispatch(addImage(gifResponse.data.images.downsized_medium.url))
                //Call API to delete Picture on Imgur
                callAPI.delete(deleteHash)
              }
              )
            })
          })
      };
}

//Connect App to a Smart Component
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(addImage, dispatch) }
}
export default connect(mapDispatchToProps)(PickImage);

