import React, { Component }  from 'react';
import { AsyncStorage, KeyboardAvoidingView, StyleSheet, TextInput, Text, View, Button, Alert, ActivityIndicator, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';

export default class Register extends Component {
  state = {
    username: '',
    password: '',
    role: '',
    dept: '',
    manager: '',
    message: '',
    users: []
  }

    static navigationOptions = {
      title: 'Register'
    }
  componentWillMount() {
    this.setState({
      users: [
        {username: 'jessie', password: '1234', role: 'admin', dept: 'hr', manager: 'jordan'},
        {username: 'jordan', password: '1234', role: 'user', dept: 'co', manager: 'jessie'},
        {username: 'jarrel', password: '1234', role: 'user', dept: 'op', manager: 'jordan'},
        {username: 'janson', password: '1234', role: 'user', dept: 'it', manager: 'jordan'},
        {username: 'damon', password: '1234', role: 'user', dept: 'op', manager: 'jeremy'},
        {username: 'jayden', password: '1234', role: 'user', dept: 'tr', manager: 'jordan'},
        {username: 'jeremy', password: '1234', role: 'user', dept: 'op', manager: 'jarrel'},
        {username: 'alice', password: '1234', role: 'user', dept: 'it', manager: 'janson'},
        {username: 'victoria', password: '1234', role: 'user', dept: 'it', manager: 'janson'}
      ]
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
      this.props.navigation.navigate('ClaimForm', { user: this.state.username });
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

  clearRole = () => {
    this._role.setNativeProps({ text: '' });
    this.setState({ message: '' });
  }

  clearDept = () => {
    this._dept.setNativeProps({ text: '' });
    this.setState({ message: '' });
  }

  clearManager= () => {
    this._dept.setNativeProps({ text: '' });
    this.setState({ message: '' });
  }

  render() {
    const depts = [
      {value: 'it'},
      {value: 'hr'},
      {value: 'op'},
      {value: 'tr'}
    ]
    return (
      <KeyboardAvoidingView behavior={'position'} style={{padding: 30}}>
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
        <TextInput
					ref={component => this._role = component}
					placeholder='Role'
					onChangeText={(role) => this.setState({role})}
					onFocus={this.clearRole}
          style={{height: 40}}
				/>
        <Dropdown
          label='Department'
          data={depts}
        />
        <TextInput
					ref={component => this._manager= component}
					placeholder='Manager'
					onChangeText={(Manager) => this.setState({Manager})}
					onFocus={this.clearManager}
          style={{height: 40}}
				/>

				<View style={{margin:7}} />
				<Button
					disabled={!this.state.username||!this.state.password||!this.state.role||!this.state.dept||!this.state.manager}
      		onPress={this.userLReg}
      		title="Submit"
      	/>
	    </KeyboardAvoidingView>
    )
  }
}
