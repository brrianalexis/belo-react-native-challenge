import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import { NUMERIC_KEYBOARD_BUTTONS, styles as constants } from '../../constants';
import styles from './styles';

type VirtualKeyboardProps = {
  handleKeyPress: (button: string | number) => void;
  handleLongKeyPress: () => void;
};

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({
  handleKeyPress,
  handleLongKeyPress,
}) => {
  return (
    <View style={styles.keyboard}>
      {NUMERIC_KEYBOARD_BUTTONS.map(row => (
        <View key={row.join()} style={styles.row}>
          {row.map(button => (
            <Pressable
              key={button}
              style={({ pressed }) => [
                styles.button,
                {
                  backgroundColor: pressed
                    ? constants.lighterBackground
                    : constants.background,
                },
              ]}
              onPress={() => {
                handleKeyPress(button);
              }}
              onLongPress={button === '<' ? handleLongKeyPress : undefined}
              testID={`keyboard-button-${button}`}
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
