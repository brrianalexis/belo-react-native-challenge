import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import styles from './styles';

type TransactionIdProps = {};

const TransactionId: React.FC<TransactionIdProps> = ({}) => {
  const txId = `#${Math.floor(Math.random() * 100000000)}`;

  return (
    <View style={styles.transaction}>
      <Text style={styles.id}>Transaction {txId}</Text>
      <Pressable
        style={styles.copyButton}
        onPress={() => Clipboard.setString(txId)}
      >
        <Text style={styles.copyText}>Copy</Text>
      </Pressable>
    </View>
  );
};

export default TransactionId;
