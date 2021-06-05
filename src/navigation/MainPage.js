import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AgreementScreen from '../screen/AgreementScreen';
import DeliveryScreen from '../screen/Delivery/DeliveryScreen';
import HomeScreen from '../screen/HomeScreen';
import LogInScreen from '../screen/LogiInScreen';
import CourierScreen from '../screen/Courier';


const MainRoute=createStackNavigator()

const MainPage = () => {
    

    return (
       <MainRoute.Navigator>
            <MainRoute.Screen name='login' component={ LogInScreen }/>
            <MainRoute.Screen name="Home" component={ HomeScreen }/>
            <MainRoute.Screen name="Agreement" component={ AgreementScreen }/>
            <MainRoute.Screen name="Courier" component={ CourierScreen }/>
            <MainRoute.Screen name="Delivery" component ={ DeliveryScreen }/>
            
        </MainRoute.Navigator>
    );
}

export default MainPage;
