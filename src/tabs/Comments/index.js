import React, {useState,useEffect} from 'react';
import {View,Text,FlatList} from 'react-native';
import styles from './styles';

const Comments=()=>{


    const [info,setInfo]=useState([]);
    const [loading,setLoading]=useState(true);

    const api_post='https://jsonplaceholder.typicode.com/comments';

/*Here is the code,
 to get/extract data,
  from the given APi of the Comment Tab.*/
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
                <Text style={styles.uid}>PostID: {item.postId}</Text>
                <Text style={styles.title}>Name: {item.name}</Text>
                <Text style={styles.title}>Email: {item.email}</Text>       
                <Text style={styles.body}>Body: {item.body}</Text>       
       
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

export default Comments;