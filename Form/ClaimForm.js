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
      distance: 0,
      startDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
      endDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
      time: new Date().getHours() + ':' + new Date().getMinutes(),
      lodging: 0,
      meal: 0,
      other: 0,
      entertain: 0,
      tol: 0,
      total: 44.91
    };
    this.mapView = null;
  }

  static navigationOptions = {
    header: null
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

        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#00b9c6'}}>Claim Form</Text>

        <Text style={{fontSize: 20, marginTop: 15}}>From Date:</Text>
        <DatePicker
          style={{width: 300}}
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
          style={{width: 300}}
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
          style={{width: 300}}
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
              this.setState({distance: result.distance}),
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

      <Text style={{fontSize: 20}}>Distance:</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Your Destination"
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
        placeholder="Accomodation ..."
        onChangeText={(lodging) => this.setState({lodging})}
      />

      <Text style={{fontSize: 20}}>Tol:</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Tol Fees ..."
        onChangeText={(tol) => this.setState({tol})}
      />

      <Text style={{fontSize: 20}}>Meal:</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Breakfast, Lunch, Dinner ..."
        onChangeText={(meal) => this.setState({meal})}
      />

      <Text style={{fontSize: 20}}>Entertainment:</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Entertainment ..."
        onChangeText={(entertain) => this.setState({entertain})}
      />

      <Text style={{fontSize: 20}}>Other:</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Other ..."
        onChangeText={(other) => this.setState({other})}
      />

      <Text style={{fontSize: 20}}>Total:</Text>
      <TextInput
        style={{height: 40, marginBottom: 60}}
        editable={false}
        value={'RM ' + this.state.total}
      />

      <TouchableNativeFeedback
       onPress={() => { Alert.alert(
      'Claim Successfully Submitted!',
      'Please wait for approval.',
      [
      {text: 'Ok! Thank you Jessie!', onPress: () => {this.props.navigation.goBack()}}
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
