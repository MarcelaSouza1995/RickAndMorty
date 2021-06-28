import React, { useContext } from 'react';
import DataContext from '../data/DataContext';
import CardDetails from '../components/CardDetails';
import Header from '../components/Header';
import { ContainerDetails } from '../styles/ComponentesStyles';

const Details = (props) => {

  const { match: { params: { id } } } = props;
  const { data:{ state:{results} }} = useContext(DataContext);
  const detalhe = results.find((e) => e.id == id);

  return (
    <ContainerDetails>
      <Header/>
      <CardDetails person={detalhe}/>
    </ContainerDetails>
  );
}

export default Details;
