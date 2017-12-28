import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class App extends Component {

 _alert = (value) => {
   Alert.alert(value);
 }

   static navigationOptions = {
     header: null
   }
 render() {
   const tableHead = ['Name: Jessie Beauty'];
   const tableHead2 = ['Leave', 'From', 'To', 'Days'];
   const leaveDetails = (value) => (
     <TouchableOpacity onPress={() => this.props.navigation.navigate('LeaveFormApproval')}>
       <View style={{width: 58, height: 18, justifyContent: 'center'}}>
         <Text style={{textAlign: 'center', color: '#00b9c6', fontWeight: 'bold'}}>Details</Text>
       </View>
     </TouchableOpacity>
   );

   const tableData = [
     ['Annual', '27-12-2017', '29-12-2017', '3', leaveDetails('line 1')],
     ['Annual', '10-01-2018', '11-01-2018', '2', leaveDetails('line 1')],
     ['Annual', '10-02-2018', '15-02-2018', '6', leaveDetails('line 1')],
     ['Annual', '11-06-2018', '13-06-2018', '3', leaveDetails('line 1')],
     ['Unpaid', '10-09-2018', '11-09-2018', '2', leaveDetails('line 1')],
     ['Maternity', '01-11-2018', '31-11-2018', '31', leaveDetails('line 1')],
   ];

   return (
     <ScrollView style={{padding: 20}}>
       <Text style={{fontSize: 35, fontWeight: 'bold', color: '#00b9c6', marginBottom: 30}}>Leave Details</Text>
       <Table>
         <Row data={tableHead} style={{height: 40, backgroundColor: '#f1f8ff'}} textStyle={{textAlign: 'center'}}/>
         <Row data={tableHead2} flexArr={[1.6, 2, 2, 2]} style={{height: 40, backgroundColor: '#f1f8ff'}} textStyle={{textAlign: 'center'}}/>
           <Rows data={tableData} flexArr={[1.6, 2, 2, 0.6, 1.4]} style={{height: 30}} textStyle={{marginLeft: 5}} textStyle={{textAlign: 'center'}}/>
       </Table>
     </ScrollView>
   )
 }
}
