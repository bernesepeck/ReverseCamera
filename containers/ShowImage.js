import React from 'react';
import { Image, Text } from 'react-native';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';

class ImageView extends React.Component {
    constructor(props){
        super(props);
      }
    render() {
        if(this.props.image.length > 0) {
            return (
                <Image source={{uri: this.props.image}} style={{ width: 200, height: 200 }} />
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