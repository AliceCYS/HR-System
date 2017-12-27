import React, { Component } from 'react';
import { Alert, AsyncStorage, Text, TextInput, ScrollView, Dimensions, StyleSheet, TouchableNativeFeedback, View, Button } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView from 'react-native-maps';
import DatePicker from 'react-native-datepicker'

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GOOGLE_MAPS_APIKEY = 'AIzaSyCRoAxaJovSunRbGazRlTfVGtx67WJ2Htk';

export default class ClaimForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: [
        {
          latitude: 37.3317876,
          longitude: -122.0054812,
        },
        {
          latitude: 37.771707,
          longitude: -122.4053769,
        },
      ],
      origin: 'HostAStay Berhad',
      destination: '',
      number: 0,
      startDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
      endDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
      time: new Date().getHours() + ':' + new Date().getMinutes()
    };
    this.mapView = null;
  }

  onMapPress = (e) => {
    if (this.state.coordinates.length == 2) {
      this.setState({
        coordinates: [
          e.nativeEvent.coordinate,
        ],
      });
    } else {
      this.setState({
        coordinates: [
          ...this.state.coordinates,
          e.nativeEvent.coordinate,
        ],
      });
    }
  }

  render() {
    return (
      <ScrollView style={{ padding: 30 }}>
        <Button
          onPress={() => this.props.navigation.navigate('LeaveForm')}
          title="Leave Form >"
        />

        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#00b9c6', marginTop: 15}}>Claim Form</Text>

        <Text style={{fontSize: 20, marginTop: 15}}>From Date:</Text>
        <DatePicker
          style={{width: 200}}
          date={this.state.startDate}
          mode="date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(startDate) => {this.setState({startDate})}}
        />

        <Text style={{fontSize: 20}}>To Date:</Text>
        <DatePicker
          style={{width: 200}}
          date={this.state.endDate}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(endDate) => {this.setState({endDate})}}
        />

        <Text style={{fontSize: 20}}>Time Out:</Text>
        <DatePicker
          style={{width: 200}}
          date={this.state.time}
          mode="time"
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(time) => {this.setState({time})}}
        />

        <Text style={{fontSize: 20}}>Location:</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Current Location"
          onChangeText={(origin) => this.setState({origin})}
          value={this.state.origin}
        />

        <Text style={{fontSize: 20}}>Destination:</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Your Destination"
          onChangeText={(destination) => this.setState({destination})}
        />

        <MapView
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          style={{height: 300}}
          ref={c => this.mapView = c}
          onPress={this.onMapPress}
        >
        {this.state.coordinates.map((coordinate, index) =>
          <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
        )}

        {(this.state.coordinates.length === 2) && (
          <MapViewDirections
            origin={this.state.origin}
            destination={this.state.destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
            onReady={(result) => {
              this.setState({number: result.distance}),
              this.mapView.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: (width / 20),
                  bottom: (height / 20),
                  left: (width / 20),
                  top: (height / 20),
                }
              });
            }}

            onError={(errorMessage) => {
              // console.log('GOT AN ERROR');
            }}
          />
        )}
      </MapView>

      <Text style={{fontSize: 20}}>Mileage:</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Your Destination"
        editable={false}
        value={this.state.number + 'km'}
      />

      <Text style={{fontSize: 20}}>Fees:</Text>
      <TextInput
        style={{height: 40, marginBottom: 60}}
        placeholder="Type here to translate!"
        onChangeText={(text) => this.setState({text})}
      />
           <TouchableNativeFeedback
             onPress={this._onPressButton}
             background={TouchableNativeFeedback.SelectableBackground()}>
             <View style={{width: 150, height: 45, marginTop: 20, marginBottom: 80, backgroundColor: '#00b9c6', justifyContent: 'center', alignItems: 'center'}}>
               <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>Submit</Text>
             </View>
           </TouchableNativeFeedback>
      </ScrollView>
    );
  }
}
