import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const GameScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Game Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameScreen;
