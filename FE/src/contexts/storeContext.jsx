import { createContext, useContext } from 'react';

export const StoreContext = createContext([], () => {});

export const storeProvider = ({ children }) => {
  return (
    <StoreContext.provider value={useState([])}>
      {children}
      <button type="button"></button>
      <input type="button" value="" />
    </StoreContext.provider>
  );
};

export const useParentContext = () => {
  return useContext(StoreContext);
};
