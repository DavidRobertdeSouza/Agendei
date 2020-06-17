/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Keyboard,
} from 'react-native';

export default function Profile({navigation}) {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 500, y: 230}));

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 0,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 10,
      }),
    ]).start();
  }, [keyboardDidHide, keyboardDidShow, offset.y, opacity]);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 95,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 110,
        duration: 100,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 200,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 230,
        duration: 100,
      }),
    ]).start();
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y,
          }}
          source={require('../../assets/perfil.png')}
        />
      </View>

      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [{translateY: offset.y}],
          },
        ]}>
        <Text style={styles.textNome}>Nome</Text>

        <TextInput
          style={styles.input}
          placeholder="(00) 00000-0000"
          placeholderTextColor="#553592"
          textAlign={'center'}
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput
          style={styles.input}
          placeholder="exemplo@exemplo.com"
          placeholderTextColor="#553592"
          textAlign={'center'}
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.SubmitText}>Editar</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#553592',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  textNome: {
    fontSize: 20,
    bottom: 50,
    fontStyle: 'italic',
    color: '#FFF',
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    color: '#553592',
    marginBottom: 15,
    borderColor: '#553592',
    fontStyle: 'italic',
    fontSize: 20,
    borderRadius: 20,
    borderWidth: 2,
    padding: 6,
  },
  btnSubmit: {
    backgroundColor: '#FFF',
    width: '40%',
    height: 45,
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: '#553592',
    borderWidth: 2,
  },
  SubmitText: {
    color: '#553592',
    fontSize: 20,
    fontStyle: 'italic',
  },
});
