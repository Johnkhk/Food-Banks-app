import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { doFirebaseConnect } from './app/firebase';

// Screens
import { MapScreen, importMarkers } from './app/screens/MapScreen';

const Stack = createStackNavigator();

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function setup() {
  doFirebaseConnect();
  importMarkers();
}

function App() {
  setup();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MapScreen">
        <Stack.Screen
          options={{headerShown: false}}
          name="MapScreen"
          component={MapScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;