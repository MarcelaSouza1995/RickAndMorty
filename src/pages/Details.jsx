import React, { useContext } from 'react';
import DataContext from '../data/DataContext';
import CardDetails from '../components/CardDetails';
import Header from '../components/Header';

const Details = (props) => {

  const { match: { params: { id } } } = props;
  const { data:{ state:{results} }} = useContext(DataContext);
  const detalhe = results.find((e) => e.id == id);

  return (
    <>
      <Header/>
      <CardDetails person={detalhe}/>
  </>
  );
}

export default Details;
