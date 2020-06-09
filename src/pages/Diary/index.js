import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

// import { Container } from './styles';

const Diary = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={require('../../assets/construcao.png')}
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
  },
  imagem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
