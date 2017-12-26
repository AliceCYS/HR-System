import { StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.11

import Login from './Form/Login';
import HomeScreen from './Form/HomeScreen';
import ClaimForm from './Form/ClaimForm';

console.disableYellowBox = true;
StatusBar.setHidden(true);

const SimpleApp = TabNavigator({
 Login: { screen: Login },
 ClaimForm: { screen: ClaimForm }
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default SimpleApp;
