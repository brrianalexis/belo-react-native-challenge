import * as React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { StackParams } from '../../types';

type SwapConfirmationScreenProps = {
  navigation: NativeStackNavigationProp<StackParams, 'SwapConfirmation'>;
};

const SwapConfirmationScreen: React.FC<SwapConfirmationScreenProps> = ({
  navigation,
}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Swap Confirmation Screen</Text>
      <Button
        title='Go to Swap Status Screen'
        onPress={() => navigation.navigate('SwapStatus')}
      />
    </View>
  );
};

export default SwapConfirmationScreen;
