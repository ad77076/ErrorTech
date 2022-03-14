import React, {useState,useEffect} from 'react';
import {View,Text,FlatList,StyleSheet} from 'react-native';
import styles from './styles';

const Posts=()=>{

    const [info,setInfo]=useState([]);
    const [loading, setLoading] = useState(true);

    const api_post='https://jsonplaceholder.typicode.com/posts';

    /*Here is the code,
     to accept and store,
      the data fetching it,
       from the api which was given*/
    const fetchData= async ()=>{
        const response=await fetch(api_post);
        const data=await response.json();
        setInfo(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
      }, []);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.eachPost}>
                <Text style={styles.uid}>UserID: {item.userId}</Text>
                <Text style={styles.title}>Title: {item.title}</Text>
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

export default Posts;