import * as React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { StackParams } from '../../types';
import styles from './styles';
import { CurrencyCard, HomeActions } from '../../components';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<StackParams, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>🙏🏻 PleaseHireMe Wallet 🙏🏻</Text>
        <Text style={styles.balance}>US$ 100.00</Text>
      </View>
      <HomeActions />
      <Text style={styles.currenciesTitle}>Currencies</Text>
      <CurrencyCard
        icon='🇦🇷'
        currencyName='Argentine peso'
        currencyBalance='0'
        currencySymbol='ARS'
      />
      <CurrencyCard
        icon='🅱️'
        currencyName='Bitcoin'
        currencyBalance='0'
        currencySymbol='BTC'
      />
      <CurrencyCard
        icon='🔷'
        currencyName='Ether'
        currencyBalance='0'
        currencySymbol='ETH'
      />
      <CurrencyCard
        icon='☀️'
        currencyName='Solana'
        currencyBalance='0'
        currencySymbol='SOL'
      />
      <CurrencyCard
        icon='💵'
        currencyName='Tether USD'
        currencyBalance='0'
        currencySymbol='USDT'
      />
      <CurrencyCard
        icon='D'
        currencyName='Dai'
        currencyBalance='0'
        currencySymbol='DAI'
      />
    </View>
  );
};

export default HomeScreen;
