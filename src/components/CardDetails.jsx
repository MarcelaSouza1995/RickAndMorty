import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineRollback } from "@react-icons/all-files/ai/AiOutlineRollback";
import { ContainerDetails,ImagemDetail, DetailsSpan, BasicDetail, BoxContainer } from '../styles/ComponentesStyles';

const CardDetails = ({person}) => {
  return(

      <ContainerDetails >
        <BoxContainer >
          <BasicDetail>
            <h1>{person.name}</h1>
            <ImagemDetail src={ person.image} alt="imagem" />
          </ BasicDetail>
          <DetailsSpan>
            <span>{`Espécie: ${person.species}`}</span>
            <span>{`Status: ${person.status}`}</span>
            <span>{`Gênero: ${person.gender}`}</span>
            <span>{`Localização: ${person.location.name}`}</span>
            <span>{`Origem: ${person.origin.name}`}</span>
            <span>{`Participação: ${person.episode.length} episódios`}</span>
          </DetailsSpan>
        </BoxContainer>        
        <Link to="/">< AiOutlineRollback /></Link>
      </ContainerDetails>

  )
}

export default CardDetails;