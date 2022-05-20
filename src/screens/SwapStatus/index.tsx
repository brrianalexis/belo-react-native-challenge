import * as React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { StackParams } from '../../types';

type SwapStatusScreenProps = {
  navigation: NativeStackNavigationProp<StackParams, 'SwapStatus'>;
};

const SwapStatusScreen: React.FC<SwapStatusScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Swap Status Screen</Text>
      <Button
        title='Go to Home Screen'
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default SwapStatusScreen;
