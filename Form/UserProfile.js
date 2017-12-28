import React, { Component }  from 'react';
import { ScrollView, Keyboard, TouchableNativeFeedback, AsyncStorage, KeyboardAvoidingView, StyleSheet, TextInput, Text, View, Button, Alert, ActivityIndicator, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class UserProfile extends Component {
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
        <Image source={require('./jessie2.png')} />
      <Text style={{fontSize: 35, fontWeight: 'bold', color: '#00b9c6'}}>Jessie Lim</Text>

        <Text style={{fontSize: 20, marginTop: 15}}>Commencement Date:</Text>
        <TextInput
          style={{height: 40}}
          editable={false}
          value={this.state.fromDate}
        />

        <Text style={{fontSize: 20, marginTop: 15}}>Department:</Text>
        <TextInput
          style={{height: 40}}
          editable={false}
          value="Administration"
        />

        <Text style={{fontSize: 20, marginTop: 15}}>Direct Report:</Text>
        <TextInput
          style={{height: 40}}
          editable={false}
          value="Jordan"
        />

        <Text style={{fontSize: 20, marginTop: 15}}>Current Position:</Text>
        <TextInput
          style={{height: 40}}
          editable={false}
          value="Senior Executive Assistant"
        />

        <Text style={{fontSize: 20, marginTop: 15}}>Current Salary:</Text>
        <TextInput
          style={{height: 40}}
          editable={false}
          value="RM9,999,999.99"
        />

        <Text style={{fontSize: 20, marginTop: 15}}>Upcoming Appraisal:</Text>
        <TextInput
          style={{height: 40}}
          editable={false}
          value={this.state.toDate}
        />

        <Text style={{fontSize: 20, marginTop: 15}}>Leaves Remaining This Year:</Text>
        <TextInput
          style={{height: 40}}
          editable={false}
          value="9"
        />

        <Text style={{fontSize: 20, marginTop: 15}}>Leaves Taken This Year:</Text>
        <TextInput
          style={{height: 40}}
          editable={false}
          value="7"
        />

        <Text style={{fontSize: 20, marginTop: 15}}>Claimed This Month:</Text>
        <TextInput
          style={{height: 40, marginBottom: 50}}
          editable={false}
          value="RM0.00"
        />
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
