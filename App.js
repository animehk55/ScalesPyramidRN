import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import ScalesMeters from './src/layouts/ScalesMeter/ScalesMeter';
import { Color } from './src/utils/theme';

const App = () => {
  return (
    <SafeAreaView style={styles.mainSection}>
      <ScalesMeters />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainSection: {
    backgroundColor: Color.BGCOLOR,
    flex: 1,
  },
});

export default App;
