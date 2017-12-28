import React, { Component }  from 'react';
import { ScrollView, Keyboard, TouchableNativeFeedback, AsyncStorage, KeyboardAvoidingView, StyleSheet, TextInput, Text, View, Button, Alert, ActivityIndicator, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import NotificationItem from './Components/NotificationItem';

export default class Notifications extends Component {
  constructor(props) {
   super(props);
   this.state = {
     reasons: 'Fever',
     days: 1,
     balanceBefore: 14,
     balanceAfter: 0,
     fromDate: new Date().getFullYear()-2 + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
     toDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDate() + 1)
    };
  }

  componentWillMount() {
    Keyboard.dismiss;
  }

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <ScrollView style={{padding: 30}}>
        <Text style={{fontSize: 35, fontWeight: 'bold', color: '#00b9c6'}}>Notifications</Text>
        <View style={{display: 'flex', flexDirection: 'column', marginBottom: 50}}>
          <NotificationItem approver="Jarrel" date="13/12" status="Pending" reason="Dog died." remarks=":(" submitter="George" />
          <NotificationItem approver="Jarrel" date="12/12" status="Pending" reason="Wedding." remarks="" submitter="Jeremy" />
          <NotificationItem approver="Janson" date="10/12" status="Approved" reason="Sick." remarks="" submitter="Lol" />
          <NotificationItem approver="Janson" date="25/11" status="Rejected" reason="Back hometown." remarks="Please please pleaseeee" submitter="Chai Mun" />
          <NotificationItem approver="Kah Yan" date="15/11" status="Approved" reason="Trip." remarks="Around the world!" submitter="Carise" />
          <NotificationItem approver="Jayden" date="29/10" status="Approved" reason="Cat died." remarks=":'(" submitter="Delvin" />
          <NotificationItem approver="Janson" date="28/10" status="Approved" reason="Holiday." remarks="IRELAND!!" submitter="Victoria" />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  row2: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  button: {
    width: 140,
    marginTop: 24,
    height: 80,
    borderRadius: 5,
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    textAlign: 'center',
    borderWidth: 0,
    borderStyle: 'solid',
    backgroundColor: '#01bac6'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }
});
