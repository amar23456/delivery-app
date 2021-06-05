import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import { Entypo } from '@expo/vector-icons';
const CircleButton = props => (
  < TouchableOpacity
    style={{
      margin: props.margin,
      height: props.size,
      width: props.size,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: props.size * 2,
    }}
    onPress={()=>props.navigation.navigate('Courier')}
    >
    <Entypo name="plus" size={50} color="white" />
    <Text style={{
        color: props.textColor, fontSize: props.fontSize}}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

export default CircleButton

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
  },
});