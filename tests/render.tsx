import * as React from 'react';
import { render, RenderOptions } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

const WithProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <Provider store={store}>{children}</Provider>;

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: WithProvider, ...options });

export * from '@testing-library/react-native';
export { customRender as render };
