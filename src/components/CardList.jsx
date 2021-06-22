import React from 'react';
import { Container } from '../styles/ComponentesStyles';
import Card from './Card';
 
const CardList = ({persons}) => {
  console.log(persons);
  return(
    <Container>
       {persons ? persons.map(e => <Card key={e.id} person={ e }/>) : <h1>Carregando...</h1>}
    </Container>
  )
}

export default CardList;