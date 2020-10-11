import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

/* components */
import TabItem from './TabItem';

const TabMenu = () => {
  return (
    <ScrollView
      style={styles.tabMenu}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <TabItem color="primary" label="現在地周辺" />
      <TabItem color="primary" label="10km" />
      <TabItem label="価格帯" />
      <TabItem label="受取時間" />
    </ScrollView>
  );
};

export default TabMenu;

const styles = StyleSheet.create({
  tabMenu: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});
