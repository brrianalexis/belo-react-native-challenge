import * as React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';

type ButtonProps = {
  type: 'primary' | 'secondary';
  fullWidth?: boolean;
  text: string;
  handlePress: () => void;
};

const Button: React.FC<ButtonProps> = ({
  fullWidth,
  handlePress,
  type,
  text,
}) => {
  const buttonStyles = {
    ...styles.button,
    ...styles[type],
    ...(fullWidth && { ...styles.fullWidth }),
  };

  const textStyles = {
    ...styles.text,
    ...(fullWidth && {
      ...styles.fullWidthText,
    }),
  };

  return (
    <Pressable onPress={handlePress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </Pressable>
  );
};

export default Button;
