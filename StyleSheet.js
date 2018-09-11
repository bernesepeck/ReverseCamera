import { StyleSheet, Dimensions } from 'react-native';
//gets the Dimensions of the Phone
const win = Dimensions.get('window');

//Stylesheet for the Components
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#FF6B6B'
    },
    header: {
        flex: 1,
        backgroundColor: '#0D1F2D',
        justifyContent: 'center',
        width: win.width,
    },
    words: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20
    },
    headerText: {
        alignSelf: 'center',
        color: 'white'
    },
    buttonContainer: {
        flex: 1,
        marginTop: 20,
        overflow: 'hidden'
      
    },
    gifContainer: {
        flex: 10
    },
    title: {
      fontSize: 19,
      fontWeight: 'bold',
    },
    icon: {
        width: 50,
        height: 50
    },
    image: {
        flex: 1,
        alignSelf: 'stretch',
        width: win.width,
        height: win.height,
    },
    activeTitle: {
      color: 'red',
    },
  });