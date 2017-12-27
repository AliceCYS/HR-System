import React, { Component } from 'react';
import { Text, TextInput, ScrollView, Dimensions, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class ClaimFormApproval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: 'HostAStay Berhad',
      destination: 'Duet Residence',
      number: 9.678,
      startDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
      endDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
      time: '10:00',
      checked: false,
      remark: ''
    };
     this.setChecked = this.setChecked.bind(this);
  }

  setChecked() {
    this.setState({checked: !this.state.checked});
  }

  render() {
    return (
      <ScrollView style={{ padding: 30 }}>
        <Button
          onPress={() => this.props.navigation.navigate('LeaveFormApproval')}
          title="Leave Approval"
        />
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#00b9c6', marginTop: 15}}>Admin Approval Form</Text>

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

        <Text style={{fontSize: 20}}>Mileage:</Text>
        <TextInput
          style={{height: 40}}
          editable={false}
          value={this.state.number + ' km'}
        />

        <Text style={{fontSize: 20}}>Fees:</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
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
