/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React from 'react';
import {AsyncStorage} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Inscreva from './pages/Inscreva';
import Teste from './pages/teste';
import Cadastrado from './pages/Cadastrado';

export default function Routs() {
  const AuthRoute = createAppContainer(
    createStackNavigator({
      Login: {
        screen: Login,
      },
    })
  );

  const BottomNavigation = createAppContainer(
    createBottomTabNavigator({
      Seach: {
        screen: Profile,
        navigationOptions: {
          tabBarLabel: 'Busca',
          tabBarIcon: (
            <>
              <Icon name="search" size={25} color="#FFF" />
            </>

          ),
        },
      },Favorite: {
        screen: Profile,
        navigationOptions: {
          tabBarLabel: 'Favoritos',
          tabBarIcon: (
            <>
              <Icon name="heart-o" size={25} color="#FFF" />
            </>

          ),
        },
      },
      Home: {
        screen: Home,
        navigationOptions: {
          tabBarLabel: 'Inicio',
          tabBarIcon: (
            <>
              <Icon name="home" size={25} color="#FFF" />
            </>

          ),
        },
      },Diary: {
        screen: Profile,
        navigationOptions: {
          tabBarLabel: 'Agenda',
          tabBarIcon: (
            <>
              <Icon name="address-book-o" size={25} color="#FFF" />
            </>

          ),
        },
      },Profile: {
        screen: Profile,
        navigationOptions: {
          tabBarLabel: 'Perfil',
          tabBarIcon: (
            <>
              <Icon name="user-circle-o" size={25} color="#FFF" />
            </>

          ),
        },
      },
    },
    {
      tabBarOptions: {
        style:{
          backgroundColor: '#630094',
        },
        activeTintColor: '#000',
        inactiveTintColor: '#FFF',
        labelStyle: {
          fontFamily: 'Roboto-Medium',
          fontSize: 12,
        },
      },
    })
  );

  const StackRoute = createAppContainer(
    createStackNavigator({
      Login: {
        screen: Login,
      },
      Home: {
        screen: BottomNavigation,
        navigationOptions: () => {
          return {
            headerRight: (
              <Icon style={{marginRight:20}} name="sign-out" color="#FFF" size={18}/>
            ),
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#630094',
            },
            headerTitle:'',
            headerTitleAlign: 'center',
          };
        },
      },
      Profile: {
        screen: Profile,
        navigationOptions: () => {
          return {
            headerLeft: (
              <Icon style={{marginLeft:20}} name="angle-left" color="#FFF" size={18}/>
            ),
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#630094',
            },
            headerTitle:'Meu Perfil',
            headerTitleAlign: 'center',
          };
        },
      },
      Teste: {
        screen: Teste,
        navigationOptions: () => {
            return {
              headerTitle: 'teste',
            };
        },
      },
      Inscreva: {
        screen: Inscreva,
      },
      Cadastrado:{
        screen: Cadastrado,
      },
    })
  );



  return (
    <>
      <StackRoute/>
    </>
  );
}
