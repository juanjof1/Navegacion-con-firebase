import React from 'react';
import { NavigationContainer, StackActionHelpers } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeSreen';


const Stack = createStackNavigator();

export default function userStack() {
    return (
       <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen name="Home"  component={HomeScreen}/>
       </Stack.Navigator>
       </NavigationContainer>
    );
}