import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

// import { Container } from './styles';

export default function Inscreva({navigation}) {
  return (
    <View style={styles.background}>
      <Image
        style={styles.imagem}
        source={require('../../assets/img_logo.png')}
      />
      <Text style={styles.text1}>
        Você irá descobrir coisas {'\n'} incríveis perto de você.
      </Text>
      <Image
        style={styles.celular}
        source={require('../../assets/cadastrado.png')}
      />
      <Text style={styles.text2}>
        Cadastrado{'\n'}com{'\n'}Sucesso!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#630094',
    alignItems: 'center',
  },
  imagem: {
    marginTop: '10%',
    width: 110,
    height: 130,
  },
  text1: {
    color: '#FFF',
    fontSize: 19,
    fontStyle: 'italic',
  },
  celular: {
    marginTop: '12%',
    width: 100,
    height: 200,
  },
  text2: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 30,
  },
});
