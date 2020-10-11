import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

/* components */
import NavigationBar from './components/NavigationBar';
import TabMenu from './components/TabMenu';
import MessageBoard from './components/MessageBoard';
import Card from './components/Card';
import CardList from './components/CardList';

const App = () => {
  return (
    <View>
      <StatusBar style="dark" />
      <SafeAreaView>
        <NavigationBar sectionTitle="探す" />
        <TabMenu />
        {/* Message Board */}
        <MessageBoard />

        <Text style={styles.sectionTitle}>お得に注文できるお店</Text>
        <CardList />

        <Text style={styles.sectionTitle}>お得に注文できるお店</Text>
        <CardList />
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '700',
    marginHorizontal: 16,
    marginBottom: 16,
  },
});
