import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NavigationBar = ({ sectionTitle }) => {
  return (
    <View>
      <View style={{ minHeight: 44, backgroundColor: '#fff' }}></View>
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={styles.title}>{sectionTitle}</Text>
      </View>
    </View>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    lineHeight: 41,
    color: '#31312F',
    fontWeight: '700',
  },
});
