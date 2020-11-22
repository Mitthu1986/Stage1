import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyHeader from '../component/AppHeader'

export default class Home extends React.Component{
  render(){
    return(
        <View style={{flex:1}}>
        <MyHeader
        title='Home Screen'
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
