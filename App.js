// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import BookDetailsScreen from './src/screens/BookDetailsScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen options={{
          headerShown:false
        }} name="HomeScreen" component={HomeScreen} />
        <Stack.Screen options={{
         headerBackTitle:"Back",
         title:""
        }} name="BookDetailsScreen" component={BookDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
