
import React, { useState, useEffect, useRef } from 'react';
import { Text, View } from 'react-native';
import * as Location from 'expo-location';
import MyPositionView from './MyPositionView';

const MyPositionController = ({ navigation }) => {

    const watchLocation = useRef(null);

    //Criando os states para buscar a informação
    const [position, setPosition] = useState(null);
    const [statusPosition, setStatusPosition] = useState(0);

    useEffect(() => {          
      return () => {
          if (watchLocation.current) {
              watchLocation.current.remove();
          }
      }
    }, [])
    

    const startGetGeoLocation = (type) => {
        setStatusPosition(1);
        setTimeout(async () => {
            //Verifica se o usuário já deu a permissão e, caso não tenha, solicita a permissão
            let { status } = await Location.requestForegroundPermissionsAsync();
            //Retorna o erro
            if (status !== 'granted') {
                setStatusPosition(-1);
                return;
            }

            //Com o permissão em ordem, busca a posição do usuário assincronamente
            let currentPosition;
            if (type === 0){
                currentPosition = await Location.getCurrentPositionAsync({});
            } else {
                currentPosition = await Location.getLastKnownPositionAsync({});
            }
            
            setPosition(currentPosition);
            setStatusPosition(2);
        }, 1000);
    }

    const startToWatchLocation = async () => {
        if (watchLocation.current){
            watchLocation.current.remove();
        }

        currentPosition = await Location.getLastKnownPositionAsync({});
        setPosition(currentPosition);
        setStatusPosition(2);

        watchLocation.current = await Location.watchPositionAsync(
            { 
                accuracy: Location.Accuracy.High,
                distanceInterval: 200,
                mayShowUserSettingsDialog: true,
                timeInterval: 60,
            },
            (location) => {
                console.log(location);
                setPosition(location);
                setStatusPosition(2);
            }
        );        
    }

    const cleanInfo = () => {
        setStatusPosition(0);
    }

    //Mostra o status/resultado na tela 
    return (
        <MyPositionView 
            navigation={navigation}
            position={position}
            statusPosition={statusPosition}            
            startGetGeoLocation={startGetGeoLocation}
            startToWatchLocation={startToWatchLocation}
            cleanInfo={cleanInfo}
        />
    );
};

export default MyPositionController;