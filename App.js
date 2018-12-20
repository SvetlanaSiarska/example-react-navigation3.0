/**
 * Sample React Native Navigation 3.0
 * Svetlana Siarska
 *
 */

import React, {Component} from 'react';
import { 
  createStackNavigator,
  createSwitchNavigator, 
  createAppContainer } from 'react-navigation';
  import {
    Text,
    View,
    Image
  } from 'react-native';
import AuthLoadingScreen from './src/components/AuthLoadingScreen';
import SignInScreen from './src/components/SingInScreen'
import HomeScreen from './src/components/HomeScreen'


class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{flexDirection:'row', 
        alignContent:'space-around'}}>
       
       <View style={{flex:1, alignItems:'center'}}>
          <Image
            source={require('./src/assets/avatar.png')}
            style={ { width:40, height: 40}}
          />
        </View>
        <View style={{flex:1,           
          flexDirection:'row',
          alignContent:'center',
          justifyContent:'center'}}>
          <Text style={{flex:4}}>Logo</Text>
         </View>
         <View style={{flex:3}}></View>
      </View>
    );
  }
}

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <LogoTitle/>, //'s Profile',
      headerStyle: {height:80}
    })
  },
}, {
  //headerMode:'none',
});
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

export default class App extends Component{
  render() {
    return (
      <AppContainer/>
    );
  }
}

