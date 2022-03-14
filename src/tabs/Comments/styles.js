import React from 'react';
import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    eachPost:{
        borderRadius: 35,
        borderWidth: 1,
        borderColor: '#1565c0',
        backgroundColor: '#bbdefb',
        marginVertical: 9,
        marginHorizontal: 10,
        padding: 20
    },
    uid:{
        color: '#0d47a1',
        fontWeight: 'bold'
    },
    title:{
        color: 'black',
        marginVertical: 5,
        fontWeight: 'bold',
        fontSize: 17
    },
    body:{
        color: '#424242',
        textAlign: 'justify'
    },
});

export default styles;