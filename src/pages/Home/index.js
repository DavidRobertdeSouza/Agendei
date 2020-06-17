import React from 'react';
import {StatusBar} from 'react-native';
import {
  Container,
  Card,
  CardImage,
  CardTitle,
  Subtitle,
  ViewSub,
  CardPromo,
  Image,
  Image2,
} from './styles';

export default function Home({navigation}) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#553592" />
      <Container>
        <Card elevation={3}>
          <CardImage
            source={{
              uri:
                'https://gndermatologia.jv203.net/wp-content/uploads/sites/305/2019/05/Limpeza-de-Pele.jpg',
            }}
          />
          <Image source={require('../../assets/beleza.png')} />
          <CardTitle>Beleza e Estética</CardTitle>
        </Card>
        <Card elevation={3}>
          <CardImage
            source={{
              uri:
                'https://abrilmdemulher.files.wordpress.com/2017/12/thinkstockphotos-539453360.jpg',
            }}
          />
          <Image2 source={require('../../assets/heart.png')} />
          <CardTitle>Saúde e Bem Estar</CardTitle>
        </Card>
        <ViewSub>
          <Subtitle>Eventos e Promoções</Subtitle>
        </ViewSub>
        <Card onPress={() => navigation.navigate('Profile')} elevation={3}>
          <CardPromo>Dia da Beleza</CardPromo>
        </Card>
      </Container>
    </>
  );
}
