import React from 'react';
import { Text, View } from 'react-native';
import { Header } from '../../components/Header';

import { styles } from './styles';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};
