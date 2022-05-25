import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StateCurrency } from './';

export type StackParams = {
  Home: undefined;
  Swap: undefined;
  SwapConfirmation: {
    fromCurrency: StateCurrency;
    swapResult: number;
    toCurrency: StateCurrency;
    swapAmount: number;
  };
  SwapStatus: undefined;
};

export type HomeScreenProps = {
  navigation: NativeStackNavigationProp<StackParams, 'Home'>;
};

export type SwapScreenProps = {
  navigation: NativeStackNavigationProp<StackParams, 'Swap'>;
};

export type SwapConfirmationScreenProps = {
  navigation: NativeStackNavigationProp<StackParams, 'SwapConfirmation'>;
  route: RouteProp<StackParams, 'SwapConfirmation'>;
};

export type SwapStatusScreenProps = {
  navigation: NativeStackNavigationProp<StackParams, 'SwapStatus'>;
};
