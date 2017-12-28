import React, { Component }  from 'react';
import { ScrollView, Keyboard, TouchableNativeFeedback, AsyncStorage, KeyboardAvoidingView, StyleSheet, TextInput, Text, View, Button, Alert, ActivityIndicator, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Landing extends Component {
  state = {
    username: '',
    password: '',
    isLoggingIn: false,
    message: '',
    users: []
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
        <Image source={require('./jessie.png')} />
        <View style={styles.row2}>
          <TouchableNativeFeedback
            onPress={() => {this.props.navigation.navigate('ClaimForm')}}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Claim Submission</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
          onPress={() => {this.props.navigation.navigate('LeaveForm')}}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Leave Submission</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.row2}>
          <TouchableNativeFeedback
          onPress={() => {this.props.navigation.navigate('ClaimDetails')}}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>View/Approve Claims</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
          onPress={() => {this.props.navigation.navigate('LeaveDetails')}}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>View/Approve Leaves</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.row2}>
          <TouchableNativeFeedback
          onPress={() => {this.props.navigation.navigate('Notifications')}}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Notifications</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
          onPress={() => {this.props.navigation.navigate('UserProfile')}}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>User Profile</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.row3}>
          <TouchableNativeFeedback
          onPress={() => {this.props.navigation.navigate('UserListing')}}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>All Users</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
          onPress={() => {this.props.navigation.navigate('Login')}}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Logout</Text>
            </View>
          </TouchableNativeFeedback>
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
    row3: {
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'row',
      marginBottom: 50
    },
  button: {
    width: 140,
    marginTop: 18,
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
