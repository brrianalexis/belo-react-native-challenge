import * as React from 'react';
import { Text, View } from 'react-native';
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
      <Text style={styles.icon}>{toIcon}</Text>
      <Text style={styles.status}>{status} Swap</Text>
      <Text style={styles.date}>{swapDateNoYear}</Text>
    </View>
  );
};

export default SwapStatusDisplay;
