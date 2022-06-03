import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, RenderOptions } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import StackNavigator from '../src/navigation';

const WithProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Provider store={store}>
    <NavigationContainer>
      {/* <StackNavigator>{children}</StackNavigator> */}
      {children}
    </NavigationContainer>
  </Provider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: WithProvider, ...options });

export * from '@testing-library/react-native';
export { customRender as render };
