import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './redux/store';
import {
  HomeScreen,
  SwapScreen,
  SwapConfirmationScreen,
  SwapStatusScreen,
} from './screens';
import { StackParams } from './types';
import { styles as constants } from './constants';

const Stack = createNativeStackNavigator<StackParams>();

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle='light-content' />
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
    </Provider>
  );
};

export default App;
