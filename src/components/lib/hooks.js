import { useContext } from 'react';
import { ItemsContext } from '../../contexts/itemsContextProvider';

const useItemsContext = () => {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error(
      'useItemsContext must be used within an ItemsContextProvider'
    );
  }

  return context;
};

export default useItemsContext;
