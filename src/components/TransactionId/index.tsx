import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { styles as constants } from '../../constants';
import styles from './styles';

type TransactionIdProps = {};

const TransactionId: React.FC<TransactionIdProps> = ({}) => {
  const txId = `#${Math.floor(Math.random() * 100000000)}`;

  return (
    <View style={styles.transaction}>
      <Text style={{ ...styles.id, ...styles.text }}>Transaction {txId}</Text>
      <Pressable
        style={({ pressed }) => [
          styles.copyButton,
          {
            backgroundColor: pressed
              ? constants.lightestBackground
              : constants.lighterBackground,
          },
        ]}
        onPress={() => Clipboard.setString(txId)}
      >
        <Text style={styles.text}>Copy</Text>
      </Pressable>
    </View>
  );
};

export default TransactionId;
