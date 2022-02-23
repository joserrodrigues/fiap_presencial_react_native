import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Colors from '../../Utils/Constants/Colors';
import styles from './MyPositionStyles'
import DrawerMenu from '../../Components/DrawerMenu/DrawerMenu';
import MapView, { Marker } from 'react-native-maps';

const MyPositionView = ({ navigation, position, statusPosition, startGetGeoLocation, startToWatchLocation, cleanInfo}) => {

    let infoBox = null;

    //Organiza o texto se está buscando
    if(statusPosition === 0){
        infoBox = (
            <>
                <CustomButton title="Verificar Posição" onPress={() => startGetGeoLocation(0)} isMainButton={true} />
                <CustomButton title="Verificar Ultima Posição" onPress={() => startGetGeoLocation(1)} isMainButton={true} />                
                <CustomButton title="Monitorar Posição" onPress={startToWatchLocation} isMainButton={true} />                
            </>            
        )
    } else if (statusPosition === 1) {
        infoBox = (
            <ActivityIndicator size="large" color={Colors.Red} style={ styles.activityStyle}/>
        )
    } else if (statusPosition === 2){
        let info = "";
        if (position) {
            info = "Latitude = " + position.coords.latitude + " - Longitude = " + position.coords.longitude +
                " - accuracy = " + position.coords.accuracy;
        }        
        infoBox = (
            <>
                <View style={styles.itemsInfo}>
                    <Text style={styles.titleText}>Latitude: </Text>
                    <Text style={styles.titleDetail}>{position.coords.latitude}</Text>
                </View>
                <View style={styles.itemsInfo}>
                    <Text style={styles.titleText}>Longitude: </Text>
                    <Text style={styles.titleDetail}>{position.coords.longitude}</Text>
                </View>
                <View style={styles.itemsInfo}>
                    <Text style={styles.titleText}>Precisão: </Text>
                    <Text style={styles.titleDetail}>{position.coords.accuracy}</Text>
                </View>
                <CustomButton title="Recarregar" onPress={cleanInfo} isMainButton={true} />    
                <View style={styles.containerMap}>
                    <MapView style={{ flex: 1 }}
                        initialRegion={{
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            latitudeDelta: 0.0092,
                            longitudeDelta: 0.0091,
                        }}
                    >
                        <Marker
                            draggable
                            coordinate={{ latitude: position.coords.latitude, longitude: position.coords.longitude }}
                            title={'Posição Atual'}
                            description={'Descrição da Posição'}
                            onDragEnd={(e) => updatePosition(e.nativeEvent.coordinate)}
                        />
                    </MapView>
                </View>
            </>            
        )
    } else {
        infoBox = (
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 25, color: 'red' }}>{info}</Text>
            </View>
        )        
    }

    return (
        <View style={styles.container}>
            <DrawerMenu navigation={navigation} />
            {infoBox}
        </View>
    );
};

export default MyPositionView;