import React, { useState, useEffect, useLayoutEffect } from 'react';
import HomeView from './HomeView';
import useAPI from '../../Services/APIs/Common/useAPI';
import persons from '../../Services/APIs/Persons/persons';

const HomeController = ({ navigation }) => {
    const [dataConnection, setDataConnection] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getPersonsGetAPI = useAPI(persons.getAllPersons);

    useEffect(() => {
        getDataPage();
    }, [])


    const getDataPage = () => {
        setIsLoading(true);
        getPersonsGetAPI.requestPromise()
            .then(info => {
                setIsLoading(false);
                setDataConnection(info);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const goToDetail = (item) => {
        navigation.push('Details', {
            item: JSON.stringify(item),
        });
    }

    return (
        <HomeView navigation={navigation} dataConnection={dataConnection} isLoading={isLoading} goToDetail={goToDetail} />
    );
};

export default HomeController;