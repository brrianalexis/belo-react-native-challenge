import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParams } from './types';
import {
  HomeScreen,
  SwapScreen,
  SwapConfirmationScreen,
  SwapStatusScreen,
} from './screens';

const Stack = createNativeStackNavigator<StackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Swap' component={SwapScreen} />
        <Stack.Screen
          name='SwapConfirmation'
          component={SwapConfirmationScreen}
        />
        <Stack.Screen name='SwapStatus' component={SwapStatusScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
