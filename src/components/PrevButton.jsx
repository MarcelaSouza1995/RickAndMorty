import React, { useContext } from 'react';
import {Button} from '../styles/ComponentesStyles';
import DataContext from '../data/DataContext';
import getApi from  '../services/api';

const PrevButton = () => {
  const { data, setData, count, setCount } = useContext(DataContext);

  const prevClick = (a) => {
    return getApi(a).then(e => setData({
      ...data,
      state: e,
      original: e,
    }));
    console.log('Terminou prev')
   }

  return(
  <Button 
  type="button" 
  onClick={() => { setCount((state) => count -1);prevClick(count)} } 
  disabled={ count <= 2 }>
    Prev
  </Button>)
}

export default PrevButton;