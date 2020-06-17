import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';

const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Busque por lugares ou serviços:</Text>

      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder="Busque aqui"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <Icon style={styles.searchIcon} name="search" size={20} color="#000" />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#553592',
  },
  text: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 30,
    marginTop: 50,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#553592',
    width: '90%',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
  },
});
