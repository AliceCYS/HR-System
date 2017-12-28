import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class ClaimDetails extends Component {

 _alert = (value) => {
   Alert.alert(value);
 }

   static navigationOptions = {
     header: null
   }
 render() {
   const tableHead = ['Name: Jessie Beauty'];
   const tableHead2 = ['From', 'To', 'Amounts'];
   const claimDetails = (value) => (
     <TouchableOpacity onPress={() => this.props.navigation.navigate('ClaimFormApproval')}>
       <View style={{width: 58, height: 18, justifyContent: 'center'}}>
         <Text style={{textAlign: 'center', color: '#00b9c6', fontWeight: 'bold'}}>Details</Text>
       </View>
     </TouchableOpacity>
   );

   const tableData = [
     ['27-12-2017', '27-12-2017', 'RM44.91', claimDetails('line 1')],
     ['13-12-2017', '15-12-2017', 'RM25', claimDetails('line 1')],
     ['17-12-2017', '19-12-2017', 'RM28', claimDetails('line 1')],
     ['30-12-2017', '31-12-2017', 'RM15', claimDetails('line 1')],
     ['27-12-2017', '27-12-2017', 'RM50', claimDetails('line 1')],
     ['30-12-2017', '31-12-2017', 'RM28', claimDetails('line 1')],
   ];

   return (
     <ScrollView style={{padding: 30}}>
       <Text style={{fontSize: 35, fontWeight: 'bold', color: '#00b9c6', marginBottom: 30}}>Claim Details</Text>
       <Table>
         <Row data={tableHead} style={{height: 40, backgroundColor: '#f1f8ff'}} textStyle={{textAlign: 'center'}}/>
         <Row data={tableHead2} flexArr={[1.5, 1.5, 2]} style={{height: 40, backgroundColor: '#f1f8ff '}} textStyle={{textAlign: 'center'}}/>
           <Rows data={tableData} flexArr={[1.5, 1.5, 1.1, 0.9]} style={{height: 30}} textStyle={{marginLeft: 5, textAlign: 'center'}}/>
       </Table>
     </ScrollView>
   )
 }
}
