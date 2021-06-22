import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerDetails } from '../styles/ComponentesStyles';

const CardDetails = ({person}) => {
  return(

      <ContainerDetails >
        <h1>{person.name}</h1>
        <img src={ person.image} alt="imagem"></img>
        <span>{`Espécie: ${person.species}`}</span>
        <span>{`Status: ${person.status}`}</span>
        <span>{`Gênero: ${person.gender}`}</span>
        <span>{`Localização: ${person.location.name}`}</span>
        <span>{`Origem: ${person.origin.name}`}</span>
        <span>{`Participação: ${person.episode.length} episódios`}</span>
        <Link to="/">VOLTAR</Link>
      </ContainerDetails>
   

  )
}

export default CardDetails;