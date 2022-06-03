import * as React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from '../../../../test-utils/render';
import HomeScreen from '../';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../../types';

describe('Home Screen', () => {
  test('should render Home Screen', () => {
    const mockedNavigation = {
      navigate: jest.fn(),
    };

    //TODO    no estoy para nada seguro de silenciar esto pero bueno
    // console.error = jest.fn();

    const { debug, getByTestId, getByText, rerender } = render(
      <HomeScreen
        navigation={
          mockedNavigation as unknown as NativeStackNavigationProp<
            StackParams,
            'Home',
            undefined
          >
        }
      />,
    );

    // rerender(
    //   <HomeScreen
    //     navigation={
    //       mockedNavigation as unknown as NativeStackNavigationProp<
    //         StackParams,
    //         'Home',
    //         undefined
    //       >
    //     }
    //   />,
    // );

    expect(getByText('Not Belo')).toHaveTextContent('Not Belo');
    waitFor(
      () =>
        expect(getByTestId('total-balance')).toHaveTextContent('Loading...'),
      {
        timeout: 5000,
      },
    );

    debug();
  });
});
