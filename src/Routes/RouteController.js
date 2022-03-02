import 'react-native-gesture-handler';
import React, { useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from '../Utils/Constants/Colors';
import HomeController from '../Screens/Home/HomeController';
import DetailController from '../Screens/Detail/DetailController';
import MyInfoController from '../Screens/MyInfo/MyInfoController';
import MyPositionController from '../Screens/MyPosition/MyPositionController';
import LoginController from '../Screens/Login/LoginController';

import store from '../store/stores';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { useManageNofification } from '../Services/Notification/ManageNotification';
import * as Updates from "expo-updates";
import LoadingUpdateController from '../Screens/LoadingUpdate/LoadingUpdateController';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
    headerShown: true,
    headerStyle: {
        backgroundColor: Colors.HeaderBackgroundColor,
    },
    headerTintColor: Colors.HeaderTintColor,
    headerLayoutPreset: 'center',
};

export function StackHome() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeController}
                options={{ ...screenOptions, title: "Home" }} />
            <Stack.Screen name="Details" component={DetailController}
                options={{ ...screenOptions, title: "Detalhe" }} />
        </Stack.Navigator>
    );
}

export function MainRouteController() {

    const [hasUpdate, setHasUpdate] = useState(false)

    useEffect(() => {
        async function updateApp() {

            //*
                const { isAvailable } = await Updates.checkForUpdateAsync();
                if (isAvailable) {
                    setHasUpdate(true);
                }
            /*/
            setTimeout(() => {
                setHasUpdate(true);
            }, 2000);
            //*/
        }
        updateApp();
    }, []);

    const StackMyInfo = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="MyInfo" component={MyInfoController}
                    options={{ ...screenOptions, title: "Minhas Informações" }} />
            </Stack.Navigator>
        );
    }

    const StackMyPosition = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="MyPosition" component={MyPositionController}
                    options={{ ...screenOptions, title: "Minha Posição" }} />
            </Stack.Navigator>
        );
    }

    const userInfo = useSelector((state) => state.loginSaga.userInfo);
    useManageNofification();

    let hasToken = false;
    if (userInfo !== undefined && userInfo !== null) {
        hasToken = true;
    }

    if (hasUpdate) {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="MyPosition" component={LoadingUpdateController}
                        options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        )     
    } else if (!hasToken) {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="MyPosition" component={LoginController}
                        options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        )        
    } else {
        return (
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName="Main" >
                    <Drawer.Screen name="Main" component={StackHome}
                        options={{ title: 'Main', headerShown: false }} />
                    <Drawer.Screen name="MyInfo" component={StackMyInfo}
                        options={{ title: 'Minha Informação', headerShown: false }} />
                    <Drawer.Screen name="MyPosition" component={StackMyPosition}
                        options={{ title: 'Minha Posição', headerShown: false }} />
                </Drawer.Navigator>
            </NavigationContainer>

        );
    }
}

function RouteController() {
    return (
        <Provider store={store}>
            <MainRouteController />
        </Provider>
    )
}

export default (RouteController);