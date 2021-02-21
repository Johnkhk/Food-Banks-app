import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { MapHomeScreen } from './app/screens/MapScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MapScreen">
        <Stack.Screen
          options={{headerShown: false}}
          name="MapScreen"
          component={MapHomeScreen}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;