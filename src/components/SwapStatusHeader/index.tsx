import * as React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const SwapStatusHeader: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Not Belo</Text>
    </View>
  );
};

export default SwapStatusHeader;
