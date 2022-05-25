import * as React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParams } from './types';
import store from './redux/store';
import {
  HomeScreen,
  SwapScreen,
  SwapConfirmationScreen,
  SwapStatusScreen,
} from './screens';

const Stack = createNativeStackNavigator<StackParams>();

const App = () => {
  return (
    <Provider store={store}>
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
            }}
          />
          <Stack.Screen
            name='SwapConfirmation'
            component={SwapConfirmationScreen}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitle: '',
            }}
          />
          <Stack.Screen
            name='SwapStatus'
            component={SwapStatusScreen}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitle: '',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
