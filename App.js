
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11

import Login from './Form/Login';
import HomeScreen from './Form/HomeScreen';
import ClaimForm from './Form/ClaimForm';

const SimpleApp = StackNavigator({
 Login: { screen: Login },
 ClaimForm: { screen: ClaimForm }
});

export default SimpleApp;
