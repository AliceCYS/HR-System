import React, { Component } from 'react';
import { Text, TextInput, ScrollView, View, TouchableNativeFeedback, Button, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class LeaveFormApproval extends Component {
 constructor(props) {
  super(props);
  this.state = {
    reasons: 'Travel',
    days: 3,
    balanceBefore: 14,
    balanceAfter: 0,
    fromDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
    toDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDate() + 2)
   };
   this.setChecked = this.setChecked.bind(this);
 }


 static navigationOptions = {
   header: null
 }
 setChecked() {
   this.setState({checked: !this.state.checked});
 }ss

render() {
 let leave = [
   {value: 'Annual Leave'},
   {value: 'Emergency Leave'},
   {value: 'Medical Leave'},
   {value: 'Unpaid Leave'},
   {value: 'Maternity Leave'},
   {value: 'Compassionate Leave'},
   {value: 'Replacement Leave'},
   {value: 'Other Leave'},
 ];

 return (
   <ScrollView style={{padding: 30}}>
   <Text style={{fontSize: 35, fontWeight: 'bold', color: '#00b9c6'}}>Leave Approval</Text>

     <Text style={{fontSize: 20, marginTop: 15}}>From Date:</Text>
     <TextInput
       style={{height: 40}}
       editable={false}
       value={this.state.fromDate}
     />

     <Text style={{fontSize: 20, marginTop: 15}}>To Date:</Text>
     <TextInput
       style={{height: 40}}
       editable={false}
       value={this.state.toDate}
     />

     <Text style={{fontSize: 20, marginTop: 15}}>Type of Leave:</Text>
     <TextInput
       style={{height: 40}}
       editable={false}
       value={leave[0].value}
     />

     <Text style={{fontSize: 20, marginTop: 15}}>Reasons:</Text>
     <TextInput
       style={{height: 40}}
       editable={false}
       value={this.state.reasons}
     />

     <Text style={{fontSize: 20, marginTop: 20}}>No. of Working Days:</Text>
     <TextInput
       style={{height: 40}}
       editable={false}
       value={(((new Date(this.state.toDate) - new Date(this.state.fromDate)) / (1000 * 60 * 60 * 24) )+1).toString()}
     />

     <Text style={{fontSize: 20, marginTop: 20}}>Balance (Before):</Text>
     <TextInput
       style={{height: 40}}
       editable={false}
       value={this.state.balanceBefore.toString()}
     />

     <Text style={{fontSize: 20, marginTop: 20}}>Balance (After):</Text>
     <TextInput
       style={{height: 40}}
       editable={false}
       value={(this.state.balanceBefore - (((new Date(this.state.toDate) - new Date(this.state.fromDate)) / (1000 * 60 * 60 * 24))+1)).toString()}
     />

     <CheckBox
       center
       title='Approve'
       checked={this.state.checked}
       onPress={ this.setChecked }
       style={{fontSize: 20}}
     />

     <TouchableNativeFeedback
      onPress={() => { Alert.alert(
     'Leave Successfully Approved!',
     'Thank you.',
     [
     {text: 'Ok!', onPress: () => {this.props.navigation.goBack()}}
     ],
     { cancelable: false }
     )
}}
       background={TouchableNativeFeedback.SelectableBackground()}>
       <View style={{width: 150, height: 45, borderRadius: 5, marginTop: 20, marginBottom: 80, backgroundColor: '#00b9c6', justifyContent: 'center', alignItems: 'center'}}>
         <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Submit</Text>
       </View>
     </TouchableNativeFeedback>
   </ScrollView>
  );
}
}
