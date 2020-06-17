import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  paddingHorizontal: 25,
})`
  flex: 1;
  background-color: #fff;
`;

export const Card = styled.TouchableOpacity`
  height: 170;
  width: 100%;
  border-width: 1;
  border-color: #c8c8c8;
  border-radius: 20;
  margin-top: 30;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 50%;
  height: 110;
`;

export const Image2 = styled.Image`
  width: 37%;
  height: 110;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 170;
  position: absolute;
  border-radius: 20;
`;

export const CardTitle = styled.Text`
  font-size: 20;
  font-family: Roboto-Bold;
  font-weight: bold;
  font-style: italic;
  color: #553592;
`;

export const CardPromo = styled.Text`
  font-size: 30;
  font-family: Roboto-Bold;
  font-weight: bold;
  font-style: italic;
  color: #553592;
  position: absolute;
`;

export const ViewSub = styled.View`
  justify-content: flex-start;
  margin-top: 20;
`;

export const Subtitle = styled.Text`
  font-size: 14;
  font-family: Roboto-Bold;
  font-weight: bold;
  font-style: italic;
  color: #553592;
`;
