import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Login';

const AuthRoute = createStackNavigator({
    Login: {
        screen: Login,
    },
});

export default createAppContainer(AuthRoute);