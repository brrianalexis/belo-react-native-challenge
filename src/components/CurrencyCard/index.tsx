import * as React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

type CurrencyCardProps = {
  icon: string;
  currencyBalance: string;
  currencyName: string;
  currencySymbol: string;
};

const CurrencyCard: React.FC<CurrencyCardProps> = ({
  icon,
  currencyBalance,
  currencyName,
  currencySymbol,
}) => {
  return (
    <View style={styles.currencyCard}>
      <Text style={styles.currencyIcon}>{icon}</Text>
      <View style={styles.currencyNames}>
        <Text style={styles.currencyFullName}>{currencyName}</Text>
        <Text>{currencySymbol}</Text>
      </View>
      <View style={styles.currencyBalanceContainer}>
        <Text>
          {currencyBalance} {currencySymbol}
        </Text>
        <Text>$ {currencyBalance}</Text>
      </View>
    </View>
  );
};

export default CurrencyCard;
