import React from 'react';
import { Link } from 'react-router-dom';

import { Titulo, Imagem,Button,BoxCards } from '../styles/ComponentesStyles';

const Card = ({person}) => {
  return(

      <BoxCards >
        <Titulo>{person.name}</Titulo>
        <Imagem src={ person.image} alt="imagem"></Imagem>
        <Button><Link to={ `/${ person.id }` }>Details</ Link></Button>
      </BoxCards>
   

  )
}

export default Card;