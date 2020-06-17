import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

// import { Container } from './styles';

const Favorite = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textAproveite}>
        Aproveite seus lugares favoritos.
      </Text>
      <Text style={styles.textCard}>Beleza e estética.</Text>
      <TouchableOpacity style={styles.Card} elavation={3}>
        <Image
          style={styles.imageBeleza}
          source={require('../../assets/beleza.png')}
        />
      </TouchableOpacity>
      <Text style={styles.textCard}>Saúde e Bem Estar.</Text>
      <TouchableOpacity style={styles.Card} elavation={3}>
        <Image
          style={styles.imageHeart}
          source={require('../../assets/heart.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#553592',
  },
  textAproveite: {
    fontSize: 18,
    color: '#FFF',
    fontStyle: 'italic',
    marginTop: '15%',
    marginBottom: '10%',
    textAlign: 'center',
  },
  textCard: {
    fontSize: 18,
    color: '#FFF',
    marginLeft: '5%',
    marginBottom: '5%',
    marginTop: '10%',
  },
  Card: {
    height: 150,
    width: '90%',
    borderRadius: 20,
    borderColor: '#FFF',
    borderWidth: 2,
    marginRight: '5%',
    marginLeft: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  imageHeart: {
    width: 120,
    height: 110,
    resizeMode: 'stretch',
  },
  imageBeleza: {
    position: 'absolute',
    width: 140,
    height: 150,
  },
});
