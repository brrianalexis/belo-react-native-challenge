import * as React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { StackParams } from '../../types';

type SwapScreenProps = {
  navigation: NativeStackNavigationProp<StackParams, 'Swap'>;
};

const SwapScreen: React.FC<SwapScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Swap Screen</Text>
      <Button
        title='Go to Swap Confirmation Screen'
        onPress={() => navigation.navigate('SwapConfirmation')}
      />
    </View>
  );
};

export default SwapScreen;
