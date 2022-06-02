import * as React from 'react';
import { Text, View } from 'react-native';
import { formatCurrency } from '@coingecko/cryptoformat';
import { BalanceState } from '../../types';
import styles from './styles';

type HomeHeaderProps = {
  balance: BalanceState;
  loading: boolean;
};

const HomeHeader: React.FC<HomeHeaderProps> = ({ balance, loading }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Not Belo</Text>
      <Text style={styles.balance} testID='total-balance'>
        {loading ? 'Loading...' : formatCurrency(balance.total, 'USD')}
      </Text>
    </View>
  );
};

export default HomeHeader;
