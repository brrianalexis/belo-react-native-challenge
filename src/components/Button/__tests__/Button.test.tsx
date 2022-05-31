import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../';

describe('Button component', () => {
  test('primary', () => {
    const mockFn = jest.fn();

    const { getByText } = render(
      <Button type='primary' text='Primary button' handlePress={mockFn} />,
    );

    fireEvent.press(getByText('Primary button'));

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('secondary', () => {
    const mockFn = jest.fn();

    const { getByText } = render(
      <Button type='secondary' text='Secondary button' handlePress={mockFn} />,
    );

    fireEvent.press(getByText('Secondary button'));

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('full width primary', () => {
    const mockFn = jest.fn();

    const { getByText } = render(
      <Button
        type='primary'
        text='Full width primary button'
        handlePress={mockFn}
      />,
    );

    fireEvent.press(getByText('Full width primary button'));

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('full width secondary', () => {
    const mockFn = jest.fn();

    const { getByText } = render(
      <Button
        type='primary'
        text='Full width secondary button'
        handlePress={mockFn}
      />,
    );

    fireEvent.press(getByText('Full width secondary button'));

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
