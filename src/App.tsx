import * as React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import StackNavigator from './navigation';
import store from './redux/store';

const App: React.FC = () => (
  <Provider store={store}>
    <StatusBar barStyle='light-content' />
    <StackNavigator />
  </Provider>
);

export default App;
