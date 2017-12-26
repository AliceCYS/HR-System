import React, { Component } from 'react';
import { Text, TextInput, ScrollView, View, TouchableNativeFeedback } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';

export default class LeaveForm extends Component {
 constructor(props) {
  super(props);
  this.state = {
    reasons: '',
    days: '',
    balanceBefore: 14,
    balanceAfter: '',
    fromDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
    toDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
   };
 }

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
     <Text style={{fontSize: 35, fontWeight: 'bold', color: '#00b9c6 '}}>Leave Form</Text>

     <Text style={{fontSize: 20, marginTop: 15}}>From Date:</Text>
     <DatePicker
       style={{width: 300}}
       date={this.state.fromDate}
       mode="date"
       format="YYYY-MM-DD"
       confirmBtnText="Confirm"
       cancelBtnText="Cancel"
       customStyles={{
         dateIcon: {
           position: 'absolute',
           left: 0,
           top: 4,
           marginLeft: 0
         },
         dateInput: {
           marginLeft: 36
         }
         // ... You can check the source to find the other keys.
       }}
       onDateChange={(fromDate) => {this.setState({fromDate})}}
     />

     <Text style={{fontSize: 20, marginTop: 15}}>To Date:</Text>
     <DatePicker
       style={{width: 300}}
       date={this.state.toDate}
       mode="date"
       placeholder="select date"
       format="YYYY-MM-DD"
       confirmBtnText="Confirm"
       cancelBtnText="Cancel"
       customStyles={{
         dateIcon: {
           position: 'absolute',
           left: 0,
           top: 4,
           marginLeft: 0
         },
         dateInput: {
           marginLeft: 36
         }
         // ... You can check the source to find the other keys.
       }}
       onDateChange={(toDate) => {this.setState({toDate})}}
     />

     <Dropdown
       label='Type of Leave'
       data={leave}
     />

     <Text style={{fontSize: 20, marginTop: 15}}>Reasons:</Text>
     <TextInput
       style={{height: 40}}
       placeholder="Reasons for Apply Leave"
       onChangeText={(reasons) => this.setState({reasons})}
     />

     <Text style={{fontSize: 20, marginTop: 20}}>No. of Working Days: {((new Date(this.state.toDate) - new Date(this.state.fromDate)) / (1000 * 60 * 60 * 24)) + 1}</Text>

     <Text style={{fontSize: 20, marginTop: 20}}>Balance (Before): {this.state.balanceBefore}</Text>

     <Text style={{fontSize: 20, marginTop: 20}}>Balance (After): {this.state.balanceBefore - (((new Date(this.state.toDate) - new Date(this.state.fromDate)) / (1000 * 60 * 60 * 24)) + 1)}</Text>

     <TouchableNativeFeedback
       onPress={this._onPressButton}
       background={TouchableNativeFeedback.SelectableBackground()}>
       <View style={{width: 150, height: 45, marginTop: 20, marginBottom: 80, backgroundColor: '#00b9c6 ', justifyContent: 'center', alignItems: 'center'}}>
         <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>Submit</Text>
       </View>
     </TouchableNativeFeedback>
   </ScrollView>
  );
}
}
