import React from 'react';
import {  StyleSheet, View, } from 'react-native';
import { Button } from 'react-native-paper'
import { SocialIcon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Text } from 'react-native-elements'
import Spacer from '../component/Spacer';
import { TouchableOpacity } from 'react-native';

const LogInScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Spacer/>
         <Button  mode="contained" onPress={() => navigation.navigate('Home') }>
           Register
         </Button>
         <Spacer/>
         <Text style={{fontSize:15}}> ---------------------------------OR-------------------------</Text>
        <Spacer/>
        <Text style={{fontSize:15}}>Sign in your account</Text>
        <Spacer/>
        <SocialIcon
            title='Sign In With Facebook'
            button
            type='facebook'
        />
        
        <SocialIcon
            title='Sign In With Google'
            button
            type='google'
        />
       
        <Spacer/>
        <Text style={{fontSize:15}}>----------------------------------or------------------------------</Text>
        <Spacer/>
        <Spacer/>
        <Input
            placeholder='email\phoneNo'
        />
        <Spacer/>
        <Input 
            placeholder="Password" 
            secureTextEntry={true} 
        />
         <Button icon='login' mode="contained" onPress={() => navigation.navigate('Home')}>
           Sign In
         </Button>
         <Spacer/>
         <View style={styles.forgotpass}>
        <Text style={{fontSize:15}}>Forgot your password?</Text>
        <TouchableOpacity>
            <Text style={{color:'blue',fontSize:15}}>  reset here</Text>
        </TouchableOpacity>
        </View>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        marginTop:30,
        marginHorizontal:25,
        fontFamily:'Roboto',
        
    },
    register:{
        margin:60,

    },
    forgotpass:{
        flexDirection:'row',
        
    }
})
export default LogInScreen;
