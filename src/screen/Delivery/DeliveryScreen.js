import React from 'react';
import {Text, View,StyleSheet} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Spacer from '../../component/Spacer';
import { Input,Divider } from 'react-native-elements';
import { TextBase } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-paper'
import { TouchableOpacity } from 'react-native';

const DeliveryScreen = ({navigation}) => {
    return (
        
        <ScrollView style={styles.container}>
          <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <Ionicons name="home" size={35} color="black" />
          </TouchableOpacity>
          
          <Text style={{ fontSize:25,paddingTop:6 }}>  Enter Shipping Information</Text>
         
          <Text style={{ fontSize:18,color:'green',paddingTop:6 }}>Enter the collection address and delivery address</Text>
          
          <View style={{ alignSelf:'center',paddingTop:6 }}>
          <Text style={{ fontSize:35 }}>     From Where</Text>
          <Text style={{ fontSize:20,paddingVertical:5 }}> Where to pick up the shipment?</Text>
       
            <Input
                placeholder='enter Pick up Location'
                style={{ marginLeft:150 }}
                leftIcon={{ type: 'font-awesome', name: 'search' }}
            />
        <View style={{ flexDirection:'row' }}>
       <Text style={{fontSize:15,paddingBottom:10}}>Collection time no later than TIME    </Text>
       <FontAwesome name="calendar-o" size={24} color="black" />
      
       </View>
       </View>
        
        <Divider style={{backgroundColor:'grey',height:1}}/>
        <View style={{ alignSelf:'center' }}>
        <Text style={{ fontSize:35,paddingTop:10 }}>    To Where?</Text>
        <Text style={{ fontSize:20,paddingVertical:5 }}> Where to pick up the shipment?</Text>
        <Input
            placeholder='Enter Destination'
            style={{ marginLeft:150 }}
            leftIcon={{ type: 'font-awesome', name: 'search' }}
        />
          <View style={{flexDirection:'row'}}>
       <Text style={{fontSize:15,paddingBottom:10}}>Delivery time no later than  Date+Time    </Text>
       <FontAwesome name="calendar-o" size={24} color="black" />
      
       </View>
      </View>
        <Divider/>
        <Button icon='chevron-down' mode='text' onPress={() => console.log('Pressed')}>
           Next
         </Button>
        <Divider/>
        <View style={{ paddingTop:10}}>
        <Text style={{alignSelf:'center',fontSize:20}}>Package size</Text>
        <Divider style={{height:1.3,marginVertical:5}}/>
        <Text style={{alignSelf:'center',fontSize:20}}>Your Price</Text>
        <Divider style={{height:1.3,marginVertical:5}}/>
        <Text style={{alignSelf:'center',fontSize:20}}>Comment</Text>
        </View>
        
        </ScrollView>
    );
}
const styles=StyleSheet.create({
    container:{
        margin:15
    }
})
export default DeliveryScreen;
