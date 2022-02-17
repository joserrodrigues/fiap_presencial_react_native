import React from 'react';
import DetailView from './DetailView';

const DetailController = ({ route, navigation }) => {

    let objectItem = null;
    if (route && route.params) {
        const { item } = route.params;
        objectItem = JSON.parse(item);
    }

    return (
        <DetailView navigation={navigation} objectItem={objectItem} />
    );
};

export default DetailController;