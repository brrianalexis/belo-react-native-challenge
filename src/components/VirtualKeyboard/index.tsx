import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import { NUMERIC_KEYBOARD_BUTTONS } from '../../constants';
import styles from './styles';

type VirtualKeyboardProps = {
  handleKeyPress: (button: string | number) => void;
};

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({
  handleKeyPress,
}) => {
  return (
    <View style={styles.keyboard}>
      {NUMERIC_KEYBOARD_BUTTONS.map(row => (
        <View key={row.join()} style={styles.row}>
          {row.map(button => (
            <Pressable
              key={button}
              style={styles.button}
              onPress={() => {
                handleKeyPress(button);
              }}
            >
              <Text style={styles.key}>{button}</Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
};

export default VirtualKeyboard;
