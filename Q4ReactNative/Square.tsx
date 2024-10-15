import React from 'react';
import styles from './styles.ts';
import {Alert, Button, Text, View} from 'react-native';
type Props = {
  text: string;
};
export const Square = ({text}: Props) => {
  const clickOnTheSquare = (value: string) => {
    Alert.alert(value);
  };
  return (
    <View
      style={[
        styles.box,
        {
          backgroundColor: '#7ce0f9',
        },
      ]}>
      <Text>
        {text}
        <Button onPress={() => clickOnTheSquare(text)} title="click" />
      </Text>
    </View>
  );
};
