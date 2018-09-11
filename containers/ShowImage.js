import React from 'react';
import { Image, Text } from 'react-native';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import { callAPI } from '../api';
import styles from '../StyleSheet'


class ImageView extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        //Show Image when Image is Avaiable
        if(this.props.image.length > 0) {
            return (
                <Image source={{uri: this.props.image}} resizeMode={'contain'} style={styles.image} />
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