import * as React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { StackParams } from '../../types';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<StackParams, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title='Go to Swap Screen'
        onPress={() => navigation.navigate('Swap')}
      />
    </View>
  );
};

export default HomeScreen;
