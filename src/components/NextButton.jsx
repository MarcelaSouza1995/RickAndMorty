import React, { useContext } from 'react';
import {  FiChevronsRight  } from "@react-icons/all-files/fi/FiChevronsRight";



import {Button} from '../styles/ComponentesStyles';
import DataContext from '../data/DataContext';
import getApi from  '../services/api';
const NextButton = () => {
  const { data, setData, count, setCount } = useContext(DataContext); 

  const nextClick = (a) => {
    return getApi(a).then(e => setData({
      ...data,
      state: e,
      original: e,
    }));
   }

  return(
  <Button 
  type="button"
  onClick={() => { setCount((state) => count + 1) ; nextClick(count) } } 
  disabled={ count >= 35 }>
   <FiChevronsRight />
  </Button>)
}

export default NextButton;