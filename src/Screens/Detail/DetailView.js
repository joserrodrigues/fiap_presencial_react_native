import React from 'react';
import { View, ScrollView } from 'react-native';
import { Image, Text } from 'react-native-elements';
import styles from './DetailStyles';
import DrawerMenu from '../../Components/DrawerMenu/DrawerMenu';

const DetailView = ({ navigation, objectItem }) => {

    if (!objectItem) {
        return (
            <>
                <DrawerMenu navigation={navigation} />
                <Text style={styles.noInfo}>
                    Sem informações
                </Text>
            </>
        );
    }
    return (
        <View style={styles.mainContainer}>
            <ScrollView>
                <Image
                    source={{ uri: objectItem.image }}
                    containerStyle={styles.imageItem}
                />
                <Text style={styles.textName}>
                    {objectItem.firstName} {objectItem.lastName}
                </Text>
                <Text style={styles.title}>
                    Endereço
                </Text>
                <Text style={styles.textDetail}>
                    {objectItem.firstName} {objectItem.lastName}
                </Text>
                <Text style={styles.title}>
                    Ocupação
                </Text>
                <Text style={styles.textDetail}>
                    {objectItem.jobTitle}
                </Text>
                <Text style={styles.title}>
                    Tipo
                </Text>
                <Text style={styles.textDetail}>
                    {objectItem.jobType} / {objectItem.jobArea}
                </Text>
                <Text style={styles.title}>
                    Endereço
                </Text>
                <Text style={styles.textDetail}>
                    {objectItem.address}
                </Text>
                <Text style={styles.textDetail}>
                    {objectItem.zipCode}
                </Text>
                <Text style={styles.textDetail}>
                    {objectItem.city} / {objectItem.state} / {objectItem.coutry}
                </Text>
                <Text style={styles.title}>
                    Telefone
                </Text>
                <Text style={styles.textDetail}>
                    {objectItem.phone}
                </Text>
            </ScrollView>
        </View>
    );
};

export default DetailView;