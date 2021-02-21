import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

// Firebase Realtime
import firebase from 'firebase/app';
import 'firebase/database';
import { doFirebaseConnect } from '../firebase';
import { getFridges, updateFridges } from '../fridgeContainer';

import { FoodSearchBar } from '../elements/SearchBar';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

class MarkerComponent extends Component {
  constructor(props) {
    super(props);
  }

  renderMarkers() {
    console.log('Attempting render of ' + this.props.markers.length + ' markers!')
    return this.props.markers.map((importedMarker) => <Marker
       key = {importedMarker.key}
       title = {importedMarker.title}
       coordinate = {{ latitude: importedMarker.latitude, longitude: importedMarker.longitude }}
       description = {importedMarker.description}
     >
     </Marker>
    )
  }

  render() {
    return (this.renderMarkers());
  }
}

export class MapHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { fridges: [] }
  }

  componentDidMount() {
    doFirebaseConnect();
    var screenInstance = this;
    var fridgesRef = firebase.database().ref("fridges");
    fridgesRef.on('child_added', function(dataSnapshot) {
      console.log('Detected child_added! ' + dataSnapshot.key)
      updateFridges(dataSnapshot)
      screenInstance.setState({fridges: getFridges()})
    })
    fridgesRef.on('child_removed', function(dataSnapshot) {
      console.log('Detected child_removed! ' + dataSnapshot.key)
      updateFridges(dataSnapshot)
      screenInstance.setState({fridges: getFridges()})
    })
    fridgesRef.on('child_changed', function(dataSnapshot) {
      console.log('Detected child_changed! ' + dataSnapshot.key)
      updateFridges(dataSnapshot)
      screenInstance.setState({fridges: getFridges()})
    })
  }

  render() {
    console.log('Rendering MapHomeScreen')
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          showsUserLocation={true}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <MarkerComponent markers={this.state.fridges} />
        </MapView>
        <FoodSearchBar></FoodSearchBar>
      </View>
    );
  }
}