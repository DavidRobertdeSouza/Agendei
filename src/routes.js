/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './pages/Login';
import Home from './pages/Home';
export default function Routs() {
  const AuthRoute = createAppContainer(
    createStackNavigator({
      Login: {
        screen: Login,
      },
    })
  );

  const StackRoute = createAppContainer(
    createStackNavigator({
      Home: {
        screen: Home,
        navigationOptions: () => {
          return {
            headerRight: (
              <Icon style={{marginRight:20}} name="calendar" color="#FFF" size={18}/>
            ),
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#630094',
            },
            headerTitleStyle: {
              alignSelf:'center',
            },
            title:'Para você',
          };
        },
      },
    })
  );


  const BottomNavigation = createAppContainer(
    createBottomTabNavigator({
      StackRoute: {
        screen: StackRoute,
        navigationOptions: {
          tabBarLabel: 'Inicio',
          tabBarIcon: (
            <>
              <Icon name="home" size={18} color="#c8c8c8" />
            </>
          ),
        },
      },
    }, {
      tabBarOptions: {
        style:{
          backgroundColor: '#630094',
        },
        activeTintColor: '#FFF',
        inactiveTintColor: '#000',
        labelStyle: {
          fontFamily: 'Roboto-Medium',
          fontSize: 10,
        },
      },
    })
  );
  return (
    <>
      <BottomNavigation/>
    </>
  );
}
