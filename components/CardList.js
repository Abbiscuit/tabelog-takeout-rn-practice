import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './Card';

const CardList = () => {
  return (
    <ScrollView
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 36,
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <Card title="街のケーキ屋" freeDelivery />
      <Card title="夕方シフォンケーキ" freeDelivery />
      <Card title="いちごチョコケーキ" freeDelivery />
    </ScrollView>
  );
};

export default CardList;

const styles = StyleSheet.create({});
