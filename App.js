import React from 'react';
import {StyleSheet, View} from 'react-native';
import Carrousel from './Carrousel';

export default function App() {
  return (
    <View style={styles.container}>
      <Carrousel/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
