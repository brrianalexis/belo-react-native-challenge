import * as React from 'react';
import { Text, View } from 'react-native';
import { formatCurrency } from '@coingecko/cryptoformat';
import { BalanceState } from '../../types';
import styles from './styles';

type HomeHeaderProps = {
  balance: BalanceState;
};

const HomeHeader: React.FC<HomeHeaderProps> = ({ balance }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Not Belo</Text>
      <Text style={styles.balance}>{formatCurrency(balance.total, 'USD')}</Text>
    </View>
  );
};

export default HomeHeader;
