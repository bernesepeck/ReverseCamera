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
        console.log(this.props.image)
        if(this.props.image.length > 0) {
            return (
                <Image source={{uri: this.props.image}} resizeMode={'contain'} style={styles.image} />
            )
        }
        return(
            <Text>Bitte Bild auswählen</Text>
        )
    }
}

const mapStateToProps = function(state){
    //console.log(state.imageReducer)
    return {
      image: state.imageReducer,
    }
}

export default connect(mapStateToProps)(ImageView)