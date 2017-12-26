
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11

import Login from './Form/Login';
import HomeScreen from './Form/HomeScreen';
import ClaimForm from './Form/ClaimForm';
import ClaimFormApproval from './Form/ClaimFormApproval';
import LeaveForm from './Form/LeaveForm';
import LeaveFormApproval from './Form/LeaveFormApproval';

const SimpleApp = StackNavigator({
 LeaveFormApproval: { screen: LeaveFormApproval },
 ClaimForm: { screen: ClaimForm }
});

export default SimpleApp;
