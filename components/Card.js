import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const Card = ({ title, freeDelivery }) => {
  return (
    <TouchableOpacity
      style={{
        marginRight: 12,
      }}
    >
      <Image
        style={{
          width: 144,
          height: 88,
          marginBottom: 4,
          borderRadius: 8,
        }}
        source={require('../assets/dessert.png')}
      />
      <Text
        style={{
          fontSize: 16,
          lineHeight: 19,
          fontWeight: 'normal',
          marginBottom: 4,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 11,
          lineHeight: 13,
          color: '#000',
          opacity: 0.6,
        }}
      >
        {freeDelivery && '配送料無料'}
      </Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({});
