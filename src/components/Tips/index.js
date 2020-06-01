import React from 'react';
import {Container, Option, Title, Img} from './styles';

import img8 from '../../assets/images/08.png';
import img9 from '../../assets/images/09.png';
import img10 from '../../assets/images/10.png';
import img11 from '../../assets/images/11.png';
import img12 from '../../assets/images/12.png';

// import { Container } from './styles';

const imgs = [
  {
    key: String(Math.random()),
    img: img10,
    title: 'Pague um amigo à distância',
    bgColor: '#4139c8',
  },
  {
    key: String(Math.random()),
    img: img12,
    title: 'Adicione dinheiro na sua carteira',
    bgColor: '#00ab4b',
  },
  {
    key: String(Math.random()),
    img: img9,
    title: 'Compre créditos pré-pagos',
    bgColor: '#6a0159',
  },
  {
    key: String(Math.random()),
    img: img8,
    title: 'Universitário! Cadastre-se e ganhe mais cashback',
    bgColor: '#172c4a',
  },
  {
    key: String(Math.random()),
    img: img11,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#00ab4b',
  },
];

export default function Tips() {
  return (
    <Container>
      {imgs.map(({key, img, title, bgColor}) => (
        <Option bgColor={bgColor} key={key}>
          <Title>{title}</Title>
          <Img source={img} />
        </Option>
      ))}
    </Container>
  );
}
