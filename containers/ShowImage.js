import React from 'react';
import { Image, Text, View } from 'react-native';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import { callAPI } from '../api';
import styles from '../StyleSheet'


class ImageView extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        //Show Image when Image is loaded
        if(this.props.image.loaded == true) {
            return (
                <View>
                    <Text style={styles.words}>
                        {
                            this.props.image.words.map((y, i) => {
                                return (y+" ");
                            })
                        }
                    </Text>
                    <Image source={{uri: this.props.image.imageurl}} resizeMode={'contain'} style={styles.image} />
                </View>
            )
        } 
        //Text when there is no Image
        return(
            
            <Text>Bitte Bild auswählen</Text>
        )
    }
}

//Connect App to a Smart Component
const mapStateToProps = function(state){
    return {
      image: state.imageReducer,
    }
}
export default connect(mapStateToProps)(ImageView)