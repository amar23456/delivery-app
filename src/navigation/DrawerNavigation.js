import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screen/HomeScreen';
import HelpWorkingScreen from '../screen/DrawerScreen/HelpWorkingScreen';
import HelpScreen from '../screen/DrawerScreen/HelpScreen';
import NotificationScreen from '../screen/DrawerScreen/NotificationScreen';
import TermsScreen from '../screen/DrawerScreen/TermsScreen';
import { Icon } from 'react-native-paper';
import MainPage from './MainPage';
import SignOutScreen from '../screen/SignOutScreen';


const DrawerMenu =createDrawerNavigator();

const Drawer=() =>{
    return (
        <DrawerMenu.Navigator >
            <DrawerMenu.Screen name="HomeRoute" component={MainPage}
               options={{
                    title:"Home",
                   
                //     drawerIcon:({focused,size}) =>{ 
                //     return <Icon
                //        type="AntDesign"
                //        name='home'
                //        size={30} color='black' /> }
                        }}  
                          
            />
            <DrawerMenu.Screen name="Working" component={HelpWorkingScreen} 
                    options={{
                        title:"How It Works?",
                    //     drawerIcon:({focused,size}) =>(
                    //     <Icon
                    //     type="AntDesign"
                    //     name='infocirlceo'
                    //     size={30} color='black'/>
                    //     )
                } } 
                               />
            <DrawerMenu.Screen name ="Help" component={HelpScreen}
                options={{
                    title:"Help? Contact us",
                //     drawerIcon:({focused,size}) =>(
                //     <Icon
                //     type="AntDesign"
                //     name='home'
                //     size={30} color='black'/>
                //     )
            }}
                        
            />
            <DrawerMenu.Screen name="Notification" component={NotificationScreen}
               options={{
                title:"Notification",
            //     drawerIcon:({focused,size}) =>(
            //      <Icon
            //         type="AntDesign"
            //         name='notification'
            //         size={30} color='black'/>
            //         )
        } }    
       
            
            />
            <DrawerMenu.Screen name="Terms" component={TermsScreen}
            //    options={{
            //     title:"Terms",
            //     drawerIcon:({focused,size}) =>(
            //      <Icon
            //         type="MaterialIcons"
            //         name='article'
            //         size={30} color='black'
            //     />
            //     )  }} 
                / > 
              <DrawerMenu.Screen name="SignOut" component={SignOutScreen}
                  options={{
                    title:"SignOut",
                    // drawerIcon:({focused,size}) =>(
                    // <Icon
                    //     type="MaterialIcons"
                    //     name='article'
                    //     size={size} 
                    //     color={color}
                    //     />  ) 
                     }} 
                     
            /> 
        </DrawerMenu.Navigator>
    )
}

export default Drawer;