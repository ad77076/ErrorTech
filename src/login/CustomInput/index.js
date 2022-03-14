import React from 'react';
import {View,Text,TextInput} from 'react-native';
import styles from './styles';

const CustomInput=({value,setValue,placeholder,secureTextEntry,keyboardType})=>{
    return(
        <View style={styles.container}>
            <TextInput
            value={value}
            onChangeText={setValue} 
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}/>
        </View>    
    );
};

export default CustomInput;