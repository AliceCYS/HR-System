import React, { Component } from 'react';
import { Text, TextInput, ScrollView, View, TouchableNativeFeedback } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class LeaveFormApproval extends Component {
 constructor(props) {
  super(props);
  this.state = {
    reasons: 'Fever',
    days: 1,
    balanceBefore: 14,
    balanceAfter: 0,
    fromDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
    toDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDate() + 1)
   };
   this.setChecked = this.setChecked.bind(this);
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
     <Button
       onPress={() => this.props.navigation.navigate('ClaimFormApproval')}
       title="Claim Approval"
     />
   <Text style={{fontSize: 35, fontWeight: 'bold', color: '#00b9c6', marginTop: 15}}>Leave Approval</Text>

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
       value={leave[2].value}
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
       value={((new Date(this.state.toDate) - new Date(this.state.fromDate)) / (1000 * 60 * 60 * 24)).toString()}
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
       value={(this.state.balanceBefore - (((new Date(this.state.toDate) - new Date(this.state.fromDate)) / (1000 * 60 * 60 * 24)))).toString()}
     />

     <CheckBox
       center
       title='Approve'
       checked={this.state.checked}
       onPress={ this.setChecked }
       style={{fontSize: 20}}
     />

     <TouchableNativeFeedback
       onPress={this._onPressButton}
       background={TouchableNativeFeedback.SelectableBackground()}>
       <View style={{width: 150, height: 45, marginTop: 20, marginBottom: 80, backgroundColor: '#00b9c6', justifyContent: 'center', alignItems: 'center'}}>
         <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>Submit</Text>
       </View>
     </TouchableNativeFeedback>
   </ScrollView>
  );
}
}
