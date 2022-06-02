import * as React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import {
  CryptoName,
  CryptoSymbol,
  CurrencySymbol,
  StateCurrency,
  SwapScreenProps,
} from '../../types';
import { convertCurrency, mapSymbolToCurrency } from '../../utils';
import { useApi, useBalance } from '../../hooks';
import {
  Button,
  SwapCurrenciesModal,
  SwapDisplay,
  SwapHeader,
  VirtualKeyboard,
} from '../../components';
import styles from './styles';

const SwapScreen: React.FC<SwapScreenProps> = ({ navigation }) => {
  const {
    balance: { currencies },
  } = useBalance();

  const { useGetExchangeRatesQuery, useGetDolarBlueRateQuery } = useApi();
  const { data: dolarBlueRate } = useGetDolarBlueRateQuery();
  const { data: exchangeRates } = useGetExchangeRatesQuery();

  const [swapFrom, setSwapFrom] = React.useState<CurrencySymbol>('ARS');
  const [swapTo, setSwapTo] = React.useState<CurrencySymbol>('BTC');
  const [swapAmount, setSwapAmount] = React.useState<string>('0');
  const [error, setError] = React.useState<string | null>(null);

  const [fromSelectorVisible, setFromSelectorVisible] =
    React.useState<boolean>(false);
  const [toSelectorVisible, setToSelectorVisible] =
    React.useState<boolean>(false);

  const fromCurrency = currencies.find(
    (currency: StateCurrency) => currency.symbol === swapFrom,
  )!;
  const toCurrency = currencies.find(
    (currency: StateCurrency) => currency.symbol === swapTo,
  )!;

  const handleKeyboardPress = (button: string | number): void => {
    setError(null);
    if (typeof button === 'number') {
      setSwapAmount(prevSwapAmount =>
        prevSwapAmount !== '0'
          ? `${prevSwapAmount.toString()}${button}`
          : `${button}`,
      );
    } else {
      if (button === '.') {
        setSwapAmount(prevSwapAmount => {
          const prevSwapAmountStringified = prevSwapAmount.toString();
          const withDecimalSeparator = prevSwapAmountStringified + '.';
          return withDecimalSeparator;
        });
      } else if (button === '<') {
        setSwapAmount(prevSwapAmount => {
          const prevSwapAmountStringified = prevSwapAmount.toString();
          const prevSwapAmountLength = prevSwapAmountStringified.length;
          return prevSwapAmount.length === 1
            ? '0'
            : prevSwapAmountStringified.substring(0, prevSwapAmountLength - 1);
        });
      }
    }
  };

  const handleKeyboardLongPress = (): void => {
    setError(null);
    setSwapAmount('0');
  };

  const handleCurrenciesInvert = (): void => {
    setSwapAmount('0');
    setSwapFrom(swapTo);
    setSwapTo(swapFrom);
  };

  const convertToPesos = (): number => {
    const convertedToUsd = convertCurrency(
      swapFrom,
      +swapAmount,
      exchangeRates!,
      dolarBlueRate!,
    );
    const convertedToPesos = convertedToUsd * +dolarBlueRate?.venta!;
    return convertedToPesos;
  };

  const convertForSwap = (): number => {
    let converted: number;
    const swapMinusFee = +swapAmount * 0.99;
    const fromAsUsd = convertCurrency(
      swapFrom,
      swapMinusFee,
      exchangeRates!,
      dolarBlueRate!,
    );

    if (swapTo === 'ARS') {
      const { usd: coinRate } =
        exchangeRates![
          mapSymbolToCurrency[swapFrom as CryptoSymbol] as CryptoName
        ];
      converted = coinRate * +dolarBlueRate?.compra!;
    } else {
      const { usd: coinRate } =
        exchangeRates![
          mapSymbolToCurrency[swapTo as CryptoSymbol] as CryptoName
        ];
      converted = fromAsUsd / coinRate;
    }

    return converted;
  };

  const validateSwap = (): void => {
    if (+swapAmount > fromCurrency.local) {
      setError("You don't have enough funds");
    } else {
      const totalPesos = swapFrom === 'ARS' ? +swapAmount : convertToPesos();
      if (totalPesos < 200) {
        setError('Amount must be equal to at least ARS 200');
      } else {
        const swapResult = convertForSwap();
        navigation.navigate('SwapConfirmation', {
          swapAmount: +swapAmount,
          swapResult,
          fromCurrency,
          toCurrency,
        });
      }
    }
  };

  return (
    <View style={styles.screen}>
      <SwapHeader currency={fromCurrency} error={error} />
      <SwapDisplay
        currency={fromCurrency}
        from={swapFrom}
        setSwapAmount={setSwapAmount}
        swapAmount={swapAmount}
      />
      <View style={styles.currencies}>
        <Pressable
          style={styles.currency}
          onPress={() => setFromSelectorVisible(true)}
          testID='from-currency-selector'
        >
          <Image
            style={{ ...styles.icon, ...styles.leftIcon }}
            source={{ uri: fromCurrency.icon }}
          />
          <View>
            <Text style={styles.text}>From</Text>
            <Text
              style={{ ...styles.text, ...styles.currencyName }}
              testID='from-currency-name'
            >
              {fromCurrency.name}
            </Text>
          </View>
        </Pressable>
        {fromSelectorVisible ? (
          <SwapCurrenciesModal
            currencies={currencies}
            handleInvert={handleCurrenciesInvert}
            swapPosition='from'
            setSwapAmount={setSwapAmount}
            setSwapFrom={setSwapFrom}
            setVisible={setFromSelectorVisible}
            swapFrom={swapFrom}
            swapTo={swapTo}
            visible={fromSelectorVisible}
          />
        ) : null}
        <Pressable
          style={styles.iconContainer}
          onPress={handleCurrenciesInvert}
          testID='invert-currencies'
        >
          <Text style={styles.swapIcon}>🔁</Text>
        </Pressable>
        <Pressable
          style={{ ...styles.currency, ...styles.currencyTo }}
          onPress={() => setToSelectorVisible(true)}
          testID='to-currency-selector'
        >
          <View>
            <Text style={{ ...styles.text, ...styles.alignRight }}>To</Text>
            <Text
              style={{ ...styles.text, ...styles.currencyName }}
              testID='to-currency-name'
            >
              {toCurrency.name}
            </Text>
          </View>
          <Image
            style={{ ...styles.icon, ...styles.rightIcon }}
            source={{ uri: toCurrency.icon }}
          />
        </Pressable>
        {toSelectorVisible ? (
          <SwapCurrenciesModal
            currencies={currencies}
            handleInvert={handleCurrenciesInvert}
            swapPosition='to'
            setSwapAmount={setSwapAmount}
            setSwapFrom={setSwapTo}
            setVisible={setToSelectorVisible}
            swapFrom={swapFrom}
            swapTo={swapTo}
            visible={toSelectorVisible}
          />
        ) : null}
      </View>
      <VirtualKeyboard
        handleKeyPress={handleKeyboardPress}
        handleLongKeyPress={handleKeyboardLongPress}
      />
      <Button fullWidth handlePress={validateSwap} type='primary' text='Next' />
    </View>
  );
};

export default SwapScreen;
