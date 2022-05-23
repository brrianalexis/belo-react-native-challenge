import * as React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { StackParams } from '../../types';
import styles from './styles';

type HomeActionsProps = {};

const HomeActions: React.FC<HomeActionsProps> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <View style={styles.actions}>
      <TouchableOpacity
        style={styles.action}
        onPress={() => Alert.alert('Not implemented')}
      >
        <Text style={styles.icon}>↘️</Text>
        <Text>Receive</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.action}
        onPress={() => navigation.navigate('Swap')}
      >
        <Text style={styles.icon}>🔁</Text>
        <Text>Swap</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.action}
        onPress={() => Alert.alert('Not implemented')}
      >
        <Text style={styles.icon}>↗️</Text>
        <Text>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeActions;
