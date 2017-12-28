import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class UserListing extends Component {

 _alert = (value) => {
   Alert.alert(value);
 }
   static navigationOptions = {
     header: null
   }

 render() {
   const tableHead = ['Name'];
   const claims = (value) => (
     <TouchableOpacity onPress={() => this.props.navigation.navigate('ClaimDetails')}>
       <View style={{width: 58, height: 18, justifyContent: 'center'}}>
         <Text style={{textAlign: 'center', color: '#00b9c6', fontWeight: 'bold'}}>Claim</Text>
       </View>
     </TouchableOpacity>
   );

     const leave = (value) => (
       <TouchableOpacity onPress={() => this.props.navigation.navigate('LeaveDetails')}>
         <View style={{width: 58, height: 18, justifyContent: 'center'}}>
           <Text style={{textAlign: 'center', color: '#00b9c6', fontWeight: 'bold'}}>Leave</Text>
         </View>
       </TouchableOpacity>
   );

   const tableData = [
     ['Jessie Beauty', claims('line 1'), leave('Hello 1')],
     ['Chai Mun is Pretty', claims('line 2'), leave('Hello 2')],
     ['Victoria Tan Shen Fen', claims('line 3'), leave('Hello3')],
     ['Alice in the Wonderland', claims('line 4'), leave('Hello 4')],
     ['LOL is a GIRL', claims('line 5'), leave('Hello 5')],
     ['Alex want to DIE already', claims('line 6'), leave('Hello 6')],
     ['Janson become FAT', claims('line 7'), leave('Hello 7')],
     ['Wai Hong is DJ', claims('line 8'), leave('Hello 8')],
     ['Alan Walker, NO Smoking', claims('line 9'), leave('Hello 9')],
     ['Jeremy is the BEST', claims('line 10'), leave('Hello 10')],
     ['AB is always HERE', claims('line 11'), leave('Hello 11')],
     ['Q Mo is CUTE', claims('line 12'), leave('Hello 12')],
     ['Melissa is Balloon', claims('line 13'), leave('Hello 13')],
     ['EAT More, Play More', claims('line 14'), leave('Hello 14')],
     ['SLEEPING...', claims('line 150'), leave('Hello 15')],
   ];

   return (
     <ScrollView style={{padding: 30}}>
       <Text style={{fontSize: 35, fontWeight: 'bold', color: '#00b9c6', marginBottom: 30}}>HostAStay List</Text>
       <Table>
         <Row data={tableHead} flexArr={[6, 2, 2]} style={{height: 40, backgroundColor: '#f1f8ff'}} textStyle={{textAlign: 'center'}}/>
           <Rows data={tableData} flexArr={[6, 2, 2]} style={{height: 30}} textStyle={{marginLeft: 5}}/>
       </Table>
     </ScrollView>
   )
 }
}
