import React, { useContext } from 'react';
import DataContext from '../data/DataContext';
import { Container, GroupButtons } from '../styles/ComponentesStyles';
import CardList from '../components/CardList';
import NextButton from '../components/NextButton';
import PrevButton from '../components/PrevButton';
import Header from '../components/Header';

const Home = () => {
  const { data: {state: {results}}} = useContext(DataContext);

  return(
  <Container>
    <Header/>
    <CardList persons={ results }/>
  <GroupButtons>
      <PrevButton />
      <NextButton />
  </GroupButtons>

  </Container>

  )
}

export default Home;