import * as React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

type SwapStatusDisplayProps = {
  status: 'Successful' | 'Failed';
  toIcon: string;
};

const SwapStatusDisplay: React.FC<SwapStatusDisplayProps> = ({
  status,
  toIcon,
}) => {
  const date = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
    hour12: false,
  }).format(new Date());

  const dateArray = date.split(',');
  dateArray.splice(2, 1);

  const swapDateNoYear = dateArray.join();

  return (
    <View style={styles.display}>
      <Image
        style={styles.icon}
        source={{
          uri: toIcon,
        }}
      />
      <Text
        style={{
          ...styles.status,
          ...(status === 'Successful' ? styles.success : styles.failure),
        }}
        testID='swap-status'
      >
        {status} Swap
      </Text>
      <Text
        style={{
          ...styles.date,
          ...(status === 'Successful' ? styles.success : styles.failure),
        }}
      >
        {swapDateNoYear}
      </Text>
    </View>
  );
};

export default SwapStatusDisplay;
