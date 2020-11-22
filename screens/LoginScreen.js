import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyHeader from '../component/AppHeader'

export default class Login extends React.Component{
  render(){
    return(
        <View style={{flex:1}}>
        <MyHeader
        title='Login Screen'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
