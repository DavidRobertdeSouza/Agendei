import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

// import { Container } from './styles';

const Diary = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.ImageCalendario1}
        source={require('../../assets/calendario.png')}
      />
      <Image
        style={styles.ImageCalendario2}
        source={require('../../assets/calendario2.png')}
      />
    </View>
  );
};

export default Diary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#553592',
  },
  ImageCalendario1: {
    width: 400,
    height: 170,
    resizeMode: 'stretch',
  },
  ImageCalendario2: {
    width: 400,
    height: 450,
    resizeMode: 'stretch',
  },
});
