import { StyleSheet } from 'react-native';
import Colors from '../../Utils/Constants/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    itemsInfo: {
        flexDirection: 'row',
        margin: 18,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    titleDetail: {
        fontSize: 18,
    },
    containerInfo:{        
        backgroundColor: 'green'
    },
    containerMap:{
        flex: 1,
        backgroundColor: 'gray',
    }
});