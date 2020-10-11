import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from './Button';

const MessageBoard = () => {
  return (
    <View style={styles.boardContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>
          アプリで注文、{'\n'}できたてを{'\n'}待たずに受け取り
        </Text>
        <Button label="注文後の流れ" />
      </View>
      <View style={styles.rightContainer}>
        <Image
          style={styles.image}
          source={require('../assets/takeout-orange.png')}
        />
      </View>
    </View>
  );
};

export default MessageBoard;

const styles = StyleSheet.create({
  boardContainer: {
    backgroundColor: '#F6F6F6',
    paddingVertical: 32,
    marginBottom: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContainer: {
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    height: 112,
  },
  title: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '700',
    maxWidth: 145,
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 159,
    height: 82,
  },
});
