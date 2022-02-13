import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        marginTop: 40,
        marginBottom: 30,
    },

    topScreen:{
        flex: 5,
    },
    bottomScreen:{
        flex: 2,
    },
    item: {
        aspectRatio: 1,
        width: '100%',
        height: '100%',
        flex: 1,
    },
    titlePage:{
        margin: 20,
        fontSize: 30,
        textAlign:'center',
        color: 'red'
    },
    textBoxContainer:{
        flexGrow: 1,
    },
    textBlock: {
        flex:1,
        margin: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'red',
        padding: 20
    },
    bottomButton:{
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    buttonStyle: {
        backgroundColor: 'red',
        borderRadius: 10,
    },
    buttonContainerStyle: {
        width: '35%',
        marginHorizontal: 20,
        marginVertical: 10,
    }

});