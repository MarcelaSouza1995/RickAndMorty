import React, { useContext } from 'react';
import { FiChevronsLeft } from "@react-icons/all-files/fi/FiChevronsLeft";
import {Button} from '../styles/ComponentesStyles';
import DataContext from '../data/DataContext';
import getApi from  '../services/api';

const PrevButton = () => {
  const { data, setData, count, setCount } = useContext(DataContext);

  const prevClick = (a) => {
    window.scrollTo(0, 0)
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
    <FiChevronsLeft />
  </Button>)
}

export default PrevButton;