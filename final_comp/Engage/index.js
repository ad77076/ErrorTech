import React from 'react';
import {View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import Posts from '../../src/tabs/Posts';
import Images from '../../src/tabs/Images';
import Comments from '../../src/tabs/Comments';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


/**Well this is the component,
 *  that accepts the three,
 *  diff component and makes a Tab */
const Engage=()=>{

    const Tab=createBottomTabNavigator();


    return(
        
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  /**Styling the icons,
  *  of individual tabs  */
            if (route.name === 'Post') {
              iconName = focused
                ? 'send'
                : 'send';
            } else if (route.name === 'Image') {
              iconName = focused ? 'image' : 'image';
            } else if (route.name === 'Comment') {
              iconName = focused ? 'comment' : 'comment';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1e88e5',
          tabBarInactiveTintColor: 'gray',
        })}>

        <Tab.Screen name="Post" component={Posts} />
        <Tab.Screen name="Image" component={Images} />
        <Tab.Screen name="Comment" component={Comments} />
        </Tab.Navigator>
    );
};

export default Engage;