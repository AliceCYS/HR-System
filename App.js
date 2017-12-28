
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11

import Login from './Form/Login';
import Register from './Form/Register';
import ClaimForm from './Form/ClaimForm';
import ClaimFormApproval from './Form/ClaimFormApproval';
import LeaveForm from './Form/LeaveForm';
import LeaveFormApproval from './Form/LeaveFormApproval';
import Landing from './Form/Landing';
import UserProfile from './Form/UserProfile';
import Notifications from './Form/Notifications';
import UserListing from './Form/Listing';
import ClaimDetails from './Form/ClaimDetails';
import LeaveDetails from './Form/LeaveDetails';
import { StatusBar } from 'react-native';

StatusBar.setHidden(true);
console.disableYellowBox = true;

const SimpleApp = StackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  ClaimForm: { screen: ClaimForm },
  ClaimFormApproval: { screen: ClaimFormApproval },
  LeaveForm: { screen: LeaveForm },
  LeaveFormApproval: { screen: LeaveFormApproval },
  Landing: { screen: Landing },
  UserProfile: { screen: UserProfile },
  Notifications: { screen: Notifications },
  UserListing: { screen: UserListing },
  ClaimDetails: { screen: ClaimDetails },
  LeaveDetails: { screen: LeaveDetails }
});

export default SimpleApp;
