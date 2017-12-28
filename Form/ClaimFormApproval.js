import React, { Component } from 'react';
import { Alert, Text, TextInput, ScrollView, Dimensions, StyleSheet, TouchableNativeFeedback, Button, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class ClaimFormApproval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: 'HostAStay Berhad',
      destination: 'Nova Saujana',
      distance: 9.815,
      startDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
      endDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
      time: '18:00',
      checked: false,
      remark: '',
      lodging: '10',
      meal: '10',
      other: '0',
      entertain: '10',
      tol: '10',
      total: 44.91
    };
     this.setChecked = this.setChecked.bind(this);
  }


  static navigationOptions = {
    header: null
  }
  setChecked() {
    this.setState({checked: !this.state.checked});
  }

  render() {
    return (
      <ScrollView style={{ padding: 30 }}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#00b9c6'}}>Admin Approval Form</Text>

        <Text style={{fontSize: 20, marginTop: 15}}>From Date:</Text>
        <TextInput
          style={{height: 40}}
          editable={false}
          value={this.state.startDate}
        />

        <Text style={{fontSize: 20}}>To Date:</Text>
        <TextInput
          style={{height: 40}}
          editable={false}
          value={this.state.endDate}
        />

        <Text style={{fontSize: 20}}>Time Out:</Text>
        <TextInput
          style={{height: 40}}
          editable={false}
          value={this.state.time}
        />

        <Text style={{fontSize: 20}}>Location:</Text>
        <TextInput
          style={{height: 40}}
          editable={false}
          value={this.state.origin}
        />

        <Text style={{fontSize: 20}}>Destination:</Text>
        <TextInput
          style={{height: 40}}
          editable={false}
          value={this.state.destination}
        />

        <Text style={{fontSize: 20}}>Distance:</Text>
        <TextInput
          style={{height: 40}}
          editable={false}
          value={this.state.distance + ' km'}
        />

        <Text style={{fontSize: 20}}>Mileage Claim: (RM)</Text>
        <TextInput
          style={{height: 40}}
          editable={false}
          value={'RM ' + (parseFloat(this.state.distance) * 0.5).toFixed(2)}
        />

        <Text style={{fontSize: 20}}>Lodging:</Text>
        <TextInput
          style={{height: 40}}
          editable={false}
          value={this.state.lodging}
        />

        <Text style={{fontSize: 20}}>Tol:</Text>
        <TextInput
          style={{height: 40}}
          editable={false}
          value={this.state.tol}
        />

        <Text style={{fontSize: 20}}>Meal:</Text>
        <TextInput
          style={{height: 40}}
          editable={false}
          value={this.state.meal}
        />

        <Text style={{fontSize: 20}}>Entertainment:</Text>
        <TextInput
          style={{height: 40}}
          editable={false}
          value={this.state.entertain}
        />

        <Text style={{fontSize: 20}}>Other:</Text>
        <TextInput
          style={{height: 40}}
          editable={false}
          value={this.state.other}
        />

        <Text style={{fontSize: 20}}>Total:</Text>
        <TextInput
          style={{height: 40, marginBottom: 60}}
          editable={false}
          value={'RM ' + this.state.total}
        />

        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Remarks:</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Comments/ Remarks"
          onChangeText={(remark) => this.setState({remark})}
        />

        <CheckBox
          center
          title='Approve'
          checked={this.state.checked}
          onPress={ this.setChecked }
          style={{fontSize: 20}}
        />

        <TouchableNativeFeedback
         onPress={() => { Alert.alert(
        'Claim Successfully Approved!',
        'Thank you.',
        [
        {text: 'Ok!', onPress: () => {this.props.navigation.goBack()}}
        ],
        { cancelable: false }
        )
  }}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={{width: 150, height: 45, borderRadius: 5, marginTop: 20, marginBottom: 80, backgroundColor: '#00b9c6', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Submit</Text>
          </View>
        </TouchableNativeFeedback>
      </ScrollView>
    );
  }
}
