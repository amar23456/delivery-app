import React from 'react';
import { ScrollView,Text,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Spacer from '../../component/Spacer';

const PackageScreen = ({ navigation }) => {
    return (
       <ScrollView>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <Ionicons name="home" size={35} color="black" />
          </TouchableOpacity>
          <Spacer/>
          <Text style={{ fontSize:35 }}>  Enter Shipping Information</Text>
          <Spacer/>
          
       </ScrollView>
    );
}

export default PackageScreen;
