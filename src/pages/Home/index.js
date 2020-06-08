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
} from './styles';

export default function Home({navigation}) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#630094" />
      <Container>
        <Card elevation={3}>
          <CardImage
            source={{
              uri:
                'https://gndermatologia.jv203.net/wp-content/uploads/sites/305/2019/05/Limpeza-de-Pele.jpg',
            }}
          />
          <CardTitle>Beleza e Estética</CardTitle>
        </Card>
        <Card elevation={3}>
          <CardImage
            source={{
              uri:
                'https://abrilmdemulher.files.wordpress.com/2017/12/thinkstockphotos-539453360.jpg',
            }}
          />
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
