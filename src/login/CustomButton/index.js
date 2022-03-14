import React from 'react';
import {View,Text,TextInput,Pressable} from 'react-native';
import styles from './styles';

const CustomButton=({onPress,showText})=>{
    return(
        <Pressable 
        style={styles.container}
        onPress={onPress}>
            <Text style={styles.textLook}>{showText}</Text>
        </Pressable>    
    );
};

export default CustomButton;