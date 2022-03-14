import React, {useState,useEffect} from 'react';
import {View,Text,FlatList} from 'react-native';
import styles from './styles';

const Images=()=>{

        const [info,setInfo]=useState([]);
        const [loading,setLoading]=useState(true);

        const api_post='https://jsonplaceholder.typicode.com/albums';

/*Here lies the,
 code that fetches/gets
  the data from the given API. 
 */ 
        const fetchData= async ()=>{
            const response=await fetch(api_post);
            const data=await response.json();
            setInfo(data);
            setLoading(false);
        }

        useEffect(()=>{
            fetchData();
        },[]);

        const renderItem=({item})=>{
            return(
                <View style={styles.eachPost}>
                    <Text style={styles.uid}>UserID: {item.userId}</Text>
                    <Text style={styles.title}>Title: {item.title}</Text>       
                </View> 
            );
        };





    return(
        <View style={styles.container}>
            <FlatList
            data={info}
            renderItem={renderItem}
            />
        </View>    
    );
};

export default Images;