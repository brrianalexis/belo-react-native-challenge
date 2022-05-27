import * as React from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import { CurrencySymbol, StateCurrency } from '../../types';
import styles from './styles';

type SwapCurrenciesModalProps = {
  currencies: StateCurrency[];
  handleInvert: () => void;
  swapPosition: 'from' | 'to';
  setSwapAmount: React.Dispatch<React.SetStateAction<string>>;
  setSwapFrom: React.Dispatch<React.SetStateAction<CurrencySymbol>>;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  swapFrom: CurrencySymbol;
  swapTo: CurrencySymbol;
  visible: boolean;
};

const SwapCurrenciesModal: React.FC<SwapCurrenciesModalProps> = ({
  currencies,
  handleInvert,
  swapPosition,
  setSwapAmount,
  setSwapFrom,
  setVisible,
  swapFrom,
  swapTo,
  visible,
}) => {
  const handlePress = (currency: StateCurrency) => {
    setVisible(false);
    if (currency.symbol !== (swapPosition === 'from' ? swapTo : swapFrom)) {
      setSwapFrom(currency.symbol);
    } else {
      handleInvert();
    }
    setSwapAmount('0');
  };

  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={() => setVisible(false)}
    >
      <View style={{ ...styles.modalContent, ...styles[swapPosition] }}>
        {currencies.map(currency =>
          currency.symbol !== (swapPosition === 'from' ? swapFrom : swapTo) ? (
            <Pressable
              style={styles.selectItem}
              key={currency.symbol}
              onPress={() => handlePress(currency)}
            >
              <Text style={{ ...styles.text, ...styles.selectItemIcon }}>
                {currency.icon}
              </Text>
              <Text style={{ ...styles.text, ...styles.selectItemName }}>
                {currency.name}
              </Text>
            </Pressable>
          ) : null,
        )}
      </View>
    </Modal>
  );
};

export default SwapCurrenciesModal;
