/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

export default function Login({navigation}) {
  return (
    <>
      <View style={styles.content}>
        <View style={styles.containerLogo}>
          <Image
            style={styles.imagem}
            source={require('../../assets/img_logo.png')}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.textInscreva}>Inscreva-se</Text>

          <KeyboardAvoidingView
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              textAlign={'center'}
              autoCorrect={false}
              onChangeText={() => {}}
            />

            <TextInput
              style={styles.input}
              placeholder="E-mail"
              textAlign={'center'}
              autoCorrect={false}
              onChangeText={() => {}}
            />

            <TextInput
              style={styles.input}
              placeholder="Telefone"
              textAlign={'center'}
              autoCorrect={false}
              onChangeText={() => {}}
            />

            <TextInput
              style={styles.input}
              placeholder="Senha"
              textAlign={'center'}
              autoCorrect={false}
              onChangeText={() => {}}
            />

            <TextInput
              style={styles.input}
              placeholder="Confirmar senha"
              textAlign={'center'}
              autoCorrect={false}
              onChangeText={() => {}}
            />

            <TouchableOpacity
              onPress={() => navigation.navigate('Cadastrado')}
              style={styles.btnSubmit}>
              <Text style={styles.SubmitText}>Aceite e inscreva-se</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#553592',
    paddingHorizontal: 50,
  },
  containerLogo: {
    paddingBottom: 40,
  },
  container: {
    backgroundColor: '#FFF',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    marginTop: 10,
    width: 110,
    height: 130,
  },
  textInscreva: {
    color: '#553592',
    marginBottom: '5%',
    fontSize: 25,
    fontStyle: 'italic',
  },
  input: {
    backgroundColor: '#FFF',
    width: '80%',
    marginBottom: 10,
    borderColor: '#553592',
    color: '#222',
    fontStyle: 'italic',
    fontSize: 20,
    borderRadius: 15,
    borderWidth: 2,
    padding: 4,
  },
  btnSubmit: {
    backgroundColor: '#553592',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  SubmitText: {
    color: '#FFF',
    fontSize: 20,
    fontStyle: 'italic',
  },
  btnRegister: {
    marginTop: 10,
  },
  RegisterText: {
    color: '#000',
  },
});
