import React from 'react';
import {Switch, Text, TouchableOpacity, View,StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import CircleButton from '../component/CircularButton';

const HomeScreen = ({navigation}) => {
    return (
        <View style={ styles.container }>
            <View style={{ flexDirection:'row' }}>
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
            <FontAwesome style={ styles.bars } name="bars" size={30} color="black" />
            </TouchableOpacity>
            
            <TouchableOpacity>
             <Text style={{ 
                position:'relative',
                paddingLeft:180,
                paddingTop:10 
            }}>
                Send 
               <Switch 
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    ios_backgroundColor="#3e3e3e"
                /> 
                 Delivery
                 </Text>
            </TouchableOpacity>
            </View>
             
            <TouchableOpacity onPress={ ()=>navigation.navigate('Courier') }>
             < FontAwesome 
                name="wheelchair" 
                style= { styles.help }
                size= {40} 
                color= "black" 
            />
            <View style={ styles.circle }>
                <CircleButton
                    text="Order Delivery"
                    size={150}
                    color="#7986cb"
                    textColor="white"
                    fontSize={19}
                    margin={30}
                    navigation={navigation}
                />
            </View>
            </TouchableOpacity>
               <TouchableOpacity>
                   <Text style={styles.media}>Media</Text>
               </TouchableOpacity>
               </View>
    );
}
const styles=StyleSheet.create({
    container:{
      marginHorizontal:10,
      
    },
      bars:{
          margin:5,
          marginTop:20
      },
      help:{
          position:'absolute',
          top:630,
          marginLeft:20
      },
      media:{
        alignSelf:'center',
        marginTop:110,
        fontSize:30
      },
      circle:{
         alignSelf:'center',
         marginVertical:150 
          
      }

})
export default HomeScreen;
