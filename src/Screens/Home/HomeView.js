import React from 'react';
import { SafeAreaView, FlatList, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import DrawerMenu from '../../Components/DrawerMenu/DrawerMenu';
import Colors from '../../Utils/Constants/Colors';

import styles from './HomeStyles';

const HomeView = ({ navigation, dataConnection, isLoading, goToDetail }) => {

    const RenderItem = ({ item }) => {

        return (
            <TouchableOpacity testID={"button" + item.CPF.toString()}  style={styles.containerItem} onPress={() => goToDetail(item)}>
                <>
                    <View style={styles.textsView}>
                        <View style={styles.imageBox} >
                            <Image
                                source={{ uri: item.image }}
                                containerStyle={styles.imageItem}
                            />
                        </View>
                        <View style={styles.TextBox}>
                            <View style={styles.textNameStyle}>
                                <Text style={styles.textTitle}>{item.firstName} {item.lastName}</Text>
                            </View>
                            <View style={styles.textNameStyle}>
                                <Text style={styles.textDetail}>{item.address} - {item.state} - {item.zipCode}</Text>
                            </View>
                            <View style={styles.textNameStyle}>
                                <Text style={styles.textDetail}>{item.jobTitle}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </>
            </TouchableOpacity>
        );
    }

    let loadingBox = null
    if (isLoading) {
        loadingBox = (
            <ActivityIndicator style={styles.loadingBox} size="large" color={Colors.activityColor} testID="activityLoading" />
        )
    }
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <DrawerMenu navigation={navigation} />
            {loadingBox}
            <FlatList
                data={dataConnection.persons}
                renderItem={({ item }) => <RenderItem item={item} />}
                keyExtractor={item => item.CPF.toString()}
                testID="flatListHome"
            />
        </SafeAreaView>
    );
};

export default HomeView;