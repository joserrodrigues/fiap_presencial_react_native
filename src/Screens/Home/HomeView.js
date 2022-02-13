import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import { Image } from 'react-native-elements'
import styles from './HomeStyles';

const HomeView = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topScreen}>
                <View>
                    <Text style={styles.titlePage}> Título da Página</Text>
                </View>
                <Image
                    source={{ uri: "https://thecatapi.com/api/images/get?format=src&type=jpg"}}
                    containerStyle={styles.item}
                />
            </View>
            <View style={styles.bottomScreen}>
                <View style={styles.textBoxContainer}>
                    <View style={styles.textBlock}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat diam. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nibh sit amet commodo nulla. Massa sed elementum tempus egestas sed sed. Eget sit amet tellus cras. Magna ac placerat vestibulum lectus. Sit amet venenatis urna cursus. Est placerat in egestas erat imperdiet sed euismod nisi. Duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Vestibulum lectus mauris ultrices eros in cursus. Consequat id porta nibh venenatis cras sed felis eget. Nunc mi ipsum faucibus vitae aliquet nec. Sapien nec sagittis aliquam malesuada bibendum arcu. Tristique sollicitudin nibh sit amet. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing.
                        </Text>
                    </View>
                </View>
                <View style={styles.bottomButton}>
                    <Button
                        title="Anterior"
                        buttonStyle={styles.buttonStyle}
                        containerStyle={styles.buttonContainerStyle}
                    />
                    <Button
                        title="Próximo"
                        buttonStyle={styles.buttonStyle}
                        containerStyle={styles.buttonContainerStyle}
                    />
                </View>   
            </View>

         
            
        </View>
    );
};

export default HomeView;