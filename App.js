import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/HomeScreen';
import Login from './screens/LoginScreen';
import Signup from './screens/SignupScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

export default class App extends React.Component{
  render(){
    return(
      <View>
        
      </View>
    )
  }
}
const SwitchNavigator = createSwitchNavigator({
  Signup : {screen:Signup},
  Login  : {screen:Login},
  Home   : {screen:Home},
})
const AppContainer = createAppContainer(
  SwitchNavigator
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
