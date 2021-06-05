import React from 'react';
import { FlatList } from 'react-native';
import { View,Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { FontAwesome,AntDesign } from '@expo/vector-icons'; 
import { Button, Divider } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import Courier from './Courier';

const AgreementScreen = ({navigation}) => {
    const Accounts=[
        {
            name:'Gina D',
            list:'hello my name is gina',
            rating : 9.0,
            time: '10:30'
        },
        {
            name:'Julienn',
            list:'Juliene go go go',
            rating : 9.5,
            time: '10:10'
        },
        {
            name:'John',
            list:'john D Rockefeller',
            rating:8.0,
            time:'9:30'
        },
        {
            name:'Budd',
            list:'hello from budd',
            rating:8,
            time:'9:12'
        }

    ]
    const choosecolor=(item)=>{
        
            if (item.rating>8)
            return '#228b22'
            if( item.rating<=8 && item.rating>6)
            return '#ffd700'
            if (item.rating<6)
            return '#ff4500'}
   
    return (
        <View>
        <FlatList
          data={ Accounts }
          keyExtractor={ ({name})=> name }
          renderItem={({item})=>{
              return (
                  <View style={{marginTop:10}}>
                  <View style={{flexDirection:'row',marginTop:15,marginLeft:30}}>
                    <Avatar
                     rounded
                     size="small"
                     >
                     <FontAwesome
                      name="user" 
                      size={24} 
                      color="black"
                     />
                     </Avatar>
                     <Text style={{ fontSize:20 }}>{item.name}           <AntDesign name="star" size={24} color={choosecolor(item)} />  {item.rating}         {item.time} am                                                                                              {item.list}</Text>
                       
                       
                       </View> 
                       { item.name==='Gina D'?<Button icon='arrow-left' mode='contained' color='yellow' 
                       onPress={()=>navigation.navigate('Delivery')} >Make the shipment,Gina</Button>:null}                                       
                        
                        <AntDesign style={{marginLeft:120}} name="caretdown" size={24} color="black" />  
                     <Divider style={{height:1.8,marginLeft:23}}/>
                  </View>
              )
          }}
      />
      <TouchableOpacity onPress={()=>navigation.navigate('Home')}     >
      <Text style={{ alignSelf:'center',fontSize:30,paddingTop:210 }}>HOME</Text>
      </TouchableOpacity>
    </View> 
    
            
    );
}

export default AgreementScreen; 
