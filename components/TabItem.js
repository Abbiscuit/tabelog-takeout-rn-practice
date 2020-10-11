import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const TabItem = ({ label, color }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('Tapped')}
      style={[styles.tabItem, color === 'primary' && styles.tabPrimary]}
    >
      <Text style={[styles.text, color === 'primary' && styles.textPrimary]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  tabItem: {
    backgroundColor: '#ECECEC',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    // Find another way to style...
    marginRight: 8,
    minWidth: 72,
  },
  text: {
    color: '#31312F',
    opacity: 0.7,
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 16.8,
    textAlign: 'center',
  },
  tabPrimary: {
    backgroundColor: '#F9A826',
  },
  textPrimary: {
    color: '#fff',
    fontWeight: 'bold',
    opacity: 1,
  },
});

/* 

 backgroundColor: color === 'primary' && '#F9A826',

  style={{
          color: color === 'primary' && '#fff',
          opacity: color === 'primary' && 1,
          fontWeight: color === 'primary' && 'bold',
        }}
*/
