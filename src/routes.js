/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './pages/Login';

const AuthRoute = createStackNavigator({
  Login: {
    screen: Login,
  },
});

export default createAppContainer(AuthRoute);