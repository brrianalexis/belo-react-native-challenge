import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles as constants } from '../constants';
import {
  HomeScreen,
  SwapScreen,
  SwapConfirmationScreen,
  SwapStatusScreen,
} from '../screens';
import { StackParams } from '../types';

const Stack = createNativeStackNavigator<StackParams>();

const StackNavigator: React.FC = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Swap'
          component={SwapScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
            headerTintColor: constants.text,
          }}
        />
        <Stack.Screen
          name='SwapConfirmation'
          component={SwapConfirmationScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
            headerTintColor: constants.text,
          }}
        />
        <Stack.Screen
          name='SwapStatus'
          component={SwapStatusScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
