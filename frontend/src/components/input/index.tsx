import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

type Props = {
  change: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T,
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  value: string;
  label: string;
  error: string | undefined;
  blur: (e: any) => void;
  touched: boolean | undefined;
};

const Input = ({change, value, label, error, blur, touched}: Props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onChangeText={change}
        value={value}
        style={styles.input}
        onBlur={blur}
      />
      {touched && error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  item: {
    gap: 10,
  },

  label: {
    fontWeight: '700',
    fontSize: 18,
  },

  input: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#d9e3f0',
    fontSize: 18,
  },

  error: {
    color: 'red',
    fontWeight: '500',
  },
});
