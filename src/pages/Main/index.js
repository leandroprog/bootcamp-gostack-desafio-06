import React from 'react';
import { View, Text } from 'react-native';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Text>Home Screen</Text>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Usuários',
};
