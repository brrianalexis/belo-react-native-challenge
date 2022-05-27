import * as React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Alert, Pressable, Text, View } from 'react-native';
import { StackParams } from '../../types';
import styles from './styles';

type HomeActionsProps = {};

const HomeActions: React.FC<HomeActionsProps> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <View style={styles.actions}>
      <Pressable
        style={styles.action}
        onPress={() => Alert.alert('Not implemented')}
      >
        <Text style={styles.icon}>↘️</Text>
        <Text style={styles.text}>Receive</Text>
      </Pressable>
      <Pressable
        style={styles.action}
        onPress={() => navigation.navigate('Swap')}
      >
        <Text style={styles.icon}>🔁</Text>
        <Text style={styles.text}>Swap</Text>
      </Pressable>
      <Pressable
        style={styles.action}
        onPress={() => Alert.alert('Not implemented')}
      >
        <Text style={styles.icon}>↗️</Text>
        <Text style={styles.text}>Send</Text>
      </Pressable>
    </View>
  );
};

export default HomeActions;
