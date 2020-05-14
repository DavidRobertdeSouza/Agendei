import React, {useState, useEffect} from 'react';
import {
   View, 
   KeyboardAvoidingView, 
   Image, 
   TextInput, 
   TouchableOpacity, 
   Text, 
   StyleSheet,
   Animated,
   Keyboard
} from 'react-native';

export default function Login() {

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const[opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 200, y: 230 }));

  useEffect(()=> {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
      }),
      Animated.timing(opacity,{
        toValue: 1,
        duration: 800
      })
    ]).start();

    
  }, []);

  function keyboardDidShow(){

    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 95,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue:110,
        duration:100,
      })
    ]).start();


  }

  function keyboardDidHide(){

    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 200,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue:230,
        duration:100,
      })
    ]).start();

  }

 return (
   <KeyboardAvoidingView style={styles.background}>
     <View style={styles.containerLogo}>
       <Animated.Image
       style={{
        width: logo.x,
        height: logo.y
       }}
       source={require('../../assets/logo.png')}
       />
     </View>

     <Animated.View 
      style={[
        styles.container,
        {
          opacity: opacity,
          transform: [
            { translateY: offset.y }
          ]
        }
      ]}
     >

       <Text style={styles.textentre}>Entre</Text>
       <Text style={styles.textentre2}>Entre para encontrar lugares incríveis perto de você</Text>

       <TextInput
       style={styles.input}
       placeholder="E-mail"
       textAlign={'center'}
       autoCorrect={false}
       onChangeText={()=> {}}
       />

      <TextInput
       style={styles.input}
       placeholder="Senha"
       textAlign={'center'}
       autoCorrect={false}
       onChangeText={()=> {}}
       />

       <TouchableOpacity style={styles.btnSubmit}>
         <Text style={styles.SubmitText}>Acessar</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.btnRegister}>
         <Text style={styles.RegisterText}>Criar conta gratuita</Text>
       </TouchableOpacity>

     </Animated.View>

   </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor: '#8459a8',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerLogo:{
    flex:1,
    justifyContent: 'center'
  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  textentre:{
    fontSize: 20,
    width: '95%',
    height: 40,
    fontStyle: 'italic',
    color: '#FFF'
  },
  textentre2:{
    fontSize: 16,
    width: '95%',
    height: 50,
    fontStyle: 'italic',
    color: '#FFF'
  },
  input:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom:15,
    borderColor: '#630094',
    color:'#222',
    fontStyle: 'italic',
    fontSize: 20,
    borderRadius: 20,
    borderWidth: 2,
    padding:10
  },
  btnSubmit:{
    backgroundColor:'#630094',
    width:'90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  SubmitText:{
    color:"#FFF",
    fontSize: 20,
    fontStyle: 'italic'
  }, 
  btnRegister:{
    marginTop: 10,
  },
  RegisterText:{
    color:'#000'
  }

})