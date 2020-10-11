import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ label }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#31312F',
    borderRadius: 19.5,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
  },
});
