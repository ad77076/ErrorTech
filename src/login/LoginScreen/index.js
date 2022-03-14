import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';

import {View,Text,Image,Button, useWindowDimensions} from 'react-native';
import styles from './styles';
import Logo from '../../../assets/images/app_logo.png'
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import {useNavigation} from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Engage from '../../../final_comp/Engage';
import App from '../../../App';




const LoginScreen=({navigation})=>{

    /**Here kept,
     *  all the states using the,
     *  Hooks inside of a,
     *  functional component. */
    const [mail,setMail]=useState('');
    const [pass,setPass]=useState('');
    const [load,setLoad]=useState(false);
    const [showText,setShowText]=useState('LOGIN');
    const [sign,setSign]=useState('Not Signed.');

    /** Here lies the function,
     *  which gets called when the,
     *  user clicks/touches the,
     *  LOGIN button.  */
    async function onLoginPressed(){
        if(load){
            return;
        }
        setLoad(true);
        setShowText('Loading...')
        
        /**Here is the form data that contains the form with email and password to be sent for checking. */
        var formData = new FormData();
        formData.append('email',mail);
        formData.append('password',pass);

        /** Here is the fetch function to send the FormData and get the response inside result. */
        let result= await fetch('https://errortechnologies.com/quizdemo/apis/login',{
               method: 'POST',
               body: formData,
               headers: { 'Content-type': 'multipart/form-data' }
        });
        result=await result.json();
        setShowText('DONE SOMETHING');
        let s=JSON.stringify(result);
        setLoad(false);
        setShowText('LOGIN');
        
        try{
            if(result.data.Message == 'successfully Login'){
                navigation.navigate('Engage');
            }
            else{
                console.warn('Wrong Email or Password !');
            }
        }catch(err){
            console.warn(err);
        }

    };

    

const {height}=useWindowDimensions();

    return(
        <View style={styles.rootLook}>
            <Image
            source={Logo}
            style={[styles.logoLook,{height:height*0.3}]}
            resizeMode='contain' />
            <CustomInput 
            placeholder='Email' 
            value={mail} 
            setValue={setMail} />
            <CustomInput 
            placeholder='Password' 
            value={pass} 
            setValue={setPass} 
            secureTextEntry={true} 
            keyboardType='numeric'/>
            <CustomButton onPress={onLoginPressed} showText={showText}/>
        </View>
    );
};

export default LoginScreen;