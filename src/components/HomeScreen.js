import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import { 
  createBottomTabNavigator, 
  createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

class ChooseSkodaScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      
      <Icon name="schedule" size={25} style={{ color: tintColor }} />  
    )
 }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ChooseSkodaScreen!</Text>
      </View>
    );
  }
}
class ChooseFiatScreen extends React.Component {
  
  static navigationOptions = {
    headerTitle: 'ChooseRenaulScreen',
    tabBarIcon: ({ tintColor }) => (
      
      <Icon name="schedule" size={25} style={{ color: tintColor }} />  
    )
 }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ChooseFiatScreen!</Text>
      </View>
    );
  }
}
class ChooseRenaulScreen extends React.Component {
  static navigationOptions = {
    title: 'ChooseRenaulScreen',
    drawerLabel: 'ChooseRenaulScreen',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/avatar.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ChooseRenaulScreen!</Text>
      </View>
    );
  }
}
const Tab = createBottomTabNavigator({
      Skoda: ChooseSkodaScreen,
      Fiat: ChooseFiatScreen,    
},
{   
  tabBarOptions: {
      activeTintColor: 'steelblue',
      inactiveTintColor: 'gray', 
      showIcon: true 
    },
});

 const DrawerNavigation = createDrawerNavigator({
  Home:{
        screen: Tab,        
        //Add can more screen
       },
  Users: {
      screen: ChooseRenaulScreen,
  }
  });
  export default DrawerNavigation;

  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });