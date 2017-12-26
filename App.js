
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11

import Login from './Form/Login';
import ClaimForm from './Form/ClaimForm';
import ClaimFormApproval from './Form/ClaimFormApproval';
import LeaveForm from './Form/LeaveForm';
import LeaveFormApproval from './Form/LeaveFormApproval';

const SimpleApp = StackNavigator({
 Login: { screen: Login },
 ClaimForm: { screen: ClaimForm },
 ClaimFormApproval: { screen: ClaimFormApproval },
 LeaveForm: { screen: LeaveForm },
 LeaveFormApproval: { screen: LeaveFormApproval },
});

export default SimpleApp;
