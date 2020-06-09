import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

// import { Container } from './styles';

const Search = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={require('../../assets/construcao.png')}
      />
    </View>
  );
};

export default Search;

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
