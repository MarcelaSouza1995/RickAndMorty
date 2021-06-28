import React from 'react';
import { Container } from '../styles/ComponentesStyles';
import Card from './Card';
 
const CardList = ({persons}) => {
  const url = 'https://cdn.dribbble.com/users/233030/screenshots/3932726/rick-sanchez.gif' 
  return(
    <Container>
       {persons ? persons.map(e => <Card key={e.id} person={ e }/>) : <img src={ url } alt="if Rick" width="30%"/>}
    </Container>
  )
}

export default CardList;