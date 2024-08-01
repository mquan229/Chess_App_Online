import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const CreateRoom = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Create Room Screen</Text>
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

export default CreateRoom;
