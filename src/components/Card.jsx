import React from 'react';
import { Link } from 'react-router-dom';

import { Titulo, Imagem,Button,BoxCards } from '../styles/ComponentesStyles';

const Card = ({person}) => {
  return(

      <BoxCards >
        <div className="containerTexto">
        <Titulo>{person.name}</Titulo>
        </div>
        <Imagem src={ person.image} alt="imagem"></Imagem>        
        <Button className="btn third"><Link to={ `/${ person.id }` }>Details</ Link></Button>
      </BoxCards>
   

  )
}

export default Card;