import React, { useEffect , useState } from 'react';
import getApi from '../services/api';
import DataContext from './DataContext';

const Store = ({ children }) => {
  const initialStateFilters = {

    filterByName: {
      name: '',
    }
  };

  const initialState = {
    state: [],
    original: [],
  };

  const [data, setData] = useState(initialState);
  const [filters, setFilters] = useState(initialStateFilters);


  useEffect(() => {
    async function funcGet() {
      const dados = await getApi(50);
      setData({
        ...data,
        state: dados,
        original: dados,
      });
    }
    funcGet();
  }, []);

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      state: prev.original.filter((repo) => repo.name
        .includes(filters.filterByName.name)),
    }));
  }, [filters]);

const globalState = { data, filters, setFilters }

return (
  <DataContext.Provider value={ globalState }>
    { children }
  </DataContext.Provider>
)
}

export default Store;