
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';
import LogInScreen from './src/screen/LogiInScreen';
import Drawer from './src/navigation/DrawerNavigation';



const Main= createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Main.Navigator screenOptions={{
         title:null,
         header:()=>{
            return null
          }
      }}>
         <Main.Screen name="Home" component= { Drawer } />
      
      </Main.Navigator>
    </NavigationContainer>
  );
}


