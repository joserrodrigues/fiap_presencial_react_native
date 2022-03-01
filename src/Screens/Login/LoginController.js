import React from 'react';
import LoginView from './LoginView';
import {
    login,
} from '../../store/modules/login/actions';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import { translate } from '../../Locales/ManageLocales';
import { useGetToken } from '../../Services/Notification/ManageNotification';


const LoginController = () => {

    //Inicia o dispatch
    const dispatch = useDispatch();

    const isLoading = useSelector((state) => state.loginSaga.isLoading);
    const messageConnection = useSelector((state) => state.loginSaga.messageConnection);

    const signInSchema = Yup.object().shape({
        email: Yup.string().email(translate('invalidEmail')).required(translate('requiredEmail')),

        password: Yup.string()
            .required(translate('requiredPassword'))
            .min(4, translate('shortPassword')),
    });

    submitForm = async (values) => {
        let token = await useGetToken();
        console.log("token");
        console.log(token);
        dispatch(login(values.email,values.password));
    }
    
    return (
        <LoginView
            signInSchema={signInSchema}
            isLoading={isLoading}
            messageConnection={messageConnection}
            submitForm={submitForm} />
    );
};

export default LoginController;