import React, { Component }  from 'react';
import { Keyboard, AsyncStorage, KeyboardAvoidingView, StyleSheet, TextInput, Text, View, Alert, ActivityIndicator, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    isLoggingIn: false,
    message: '',
    users: []
  }


  static navigationOptions = {
    header: null
  }
  componentWillMount() {
    const users = [
      {username: 'Jessie', password: '1234', role: 'admin', dept: 'hr', manager: 'jordan'},
      {username: 'jordan', password: '1234', role: 'user', dept: 'co', manager: 'jessie'},
      {username: 'jarrel', password: '1234', role: 'user', dept: 'op', manager: 'jordan'},
      {username: 'janson', password: '1234', role: 'user', dept: 'it', manager: 'jordan'},
      {username: 'damon', password: '1234', role: 'user', dept: 'op', manager: 'jeremy'},
      {username: 'jayden', password: '1234', role: 'user', dept: 'tr', manager: 'jordan'},
      {username: 'jeremy', password: '1234', role: 'user', dept: 'op', manager: 'jarrel'},
      {username: 'alice', password: '1234', role: 'user', dept: 'it', manager: 'janson'},
      {username: 'victoria', password: '1234', role: 'user', dept: 'it', manager: 'janson'},
    ];

    this.setState({
      users
    });
  }

  userLogin = () => {

   this.setState({ isLoggingIn: true, message: '' });

   var params = {
       username: this.state.username,
       password: this.state.password,
       grant_type: 'password'
   };

    var formBody = [];
    for (var property in params) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(params[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    if (this.state.users.filter(user => user.username === this.state.username).length > 0) {
      Keyboard.dismiss;
      AsyncStorage.setItem('loggedInAs', this.state.username, () => {
        this.props.navigation.navigate('Landing');
      });
    } else {
      this.props.navigation.navigate('Register');
    }
  }

  clearUsername = () => {
    this._username.setNativeProps({ text: '' });
    this.setState({ message: '' });
  }

  clearPassword = () => {
    this._password.setNativeProps({ text: '' });
    this.setState({ message: '' });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={'position'} style={{padding: 30}}>
        <Image source={require('./jessie.png')} />
				<Text
					style={{fontSize: 30}}>
					Login
				</Text>
				<TextInput
					ref={component => this._username = component}
					placeholder='Username'
					onChangeText={(username) => this.setState({username})}
					autoFocus={true}
					onFocus={this.clearUsername}
          style={{height: 40}}
				/>
				<TextInput
					ref={component => this._password = component}
					placeholder='Password'
					onChangeText={(password) => this.setState({password})}
					secureTextEntry={true}
					onFocus={this.clearPassword}
					onSubmitEditing={this.userLogin}
          style={{height: 40}}
				/>
				{!!this.state.message && (
					<Text
						style={{fontSize: 14, color: 'red', padding: 5}}>
						{this.state.message}
					</Text>
				)}
				{this.state.isLoggingIn && <ActivityIndicator />}
				<View style={{margin:7}} />
				<Button
					disabled={!this.state.username||!this.state.password}
      		onPress={this.userLogin}
      		title="Submit"
          backgroundColor="#01bac6"
          borderRadius={5}
      	/>
	    </KeyboardAvoidingView>
    )
  }
}
