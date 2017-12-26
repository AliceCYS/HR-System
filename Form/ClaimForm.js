import React, { Component } from 'react';
import { Text, TextInput, ScrollView, Dimensions, StyleSheet } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView from 'react-native-maps';
import DatePicker from 'react-native-datepicker'
import { TabNavigator } from 'react-navigation';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GOOGLE_MAPS_APIKEY = 'AIzaSyCRoAxaJovSunRbGazRlTfVGtx67WJ2Htk';

export default class ClaimForm extends Component {
  static navigationOptions = {
    tabBarLabel: 'Claims',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./jessie.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

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
      text: '',
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
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Claim Form</Text>

        <Text style={{fontSize: 20}}>From Date:</Text>
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
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
          date={this.state.date}
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
          onDateChange={(endDte) => {this.setState({endDte})}}
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



    <Text style={{fontSize: 20}}>Mileage: {this.state.number} km</Text>

    <Text style={{fontSize: 20}}>Fees:</Text>
    <TextInput
      style={{height: 40}}
      placeholder="Type here to translate!"
      onChangeText={(text) => this.setState({text})}
    />
  </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
