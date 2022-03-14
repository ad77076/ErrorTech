
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Posts from './src/tabs/Posts';
import Images from './src/tabs/Images';
import Comments from './src/tabs/Comments';
import LoginScreen from './src/login/LoginScreen';
import Engage from './final_comp/Engage';
import Enter from './final_comp/Enter';
import {NativeRouter,Switch,Route} from 'react-router-native';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';


const Stack = createNativeStackNavigator();

/**Here is the App component,
 *  which gets called at first,
 *  and used StackNavigator for navigating,
 *  from one screen to the other */

const App= () => {
  
  return(
    <SafeAreaView style={styles.root}>
      <StatusBar 
      barStyle='dark-content'
      backgroundColor='#fff'/>
      <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen 
          name="LoginTwo" 
          component={LoginScreen}
          options={{headerShown: false}}/>

          <Stack.Screen
            name="Engage"
            component={Engage}
            options={{ headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>  
  );
};

const styles=StyleSheet.create({
  root:{
    flex:1,
    backgroundColor: '#e0e0e0' 
  }
});


export default App;
