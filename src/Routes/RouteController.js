import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { registerRootComponent } from 'expo';

import Colors from '../Utils/Constants/Colors';
import HomeController from '../Screens/Home/HomeController';
import DetailController from '../Screens/Detail/DetailController';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function RouteController() {

    let screenOptions = {
        headerShown: true,
        headerStyle: {
            backgroundColor: Colors.HeaderBackgroundColor,
        },
        headerTintColor: Colors.HeaderTintColor,
        headerLayoutPreset: 'center',
    };

    const StackHome = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeController}
                    options={screenOptions} />
                <Stack.Screen name="Details" component={DetailController}
                    options={screenOptions} />
            </Stack.Navigator>
        );
    }

    // return (
    //     <NavigationContainer>
    //         <StackHome />
    //     </NavigationContainer>
    // );

    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Main" >
                <Drawer.Screen name="Main" component={StackHome}
                    options={{ title: 'Main', headerShown: false }} />
                <Drawer.Screen name="Notifications" component={DetailController}
                    options={{ title: 'Notifications', headerShown: false }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );

    // return (
    //     <NavigationContainer>
    //         <Tab.Navigator>
    //             <Tab.Screen name="HomeTab" component={StackHome} />
    //             <Tab.Screen name=" NotificationsTab" component={DetailController} />
    //         </Tab.Navigator>
    //     </NavigationContainer>
    // );
}


export default registerRootComponent(RouteController);