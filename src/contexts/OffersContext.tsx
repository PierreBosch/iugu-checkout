import { createContext, useContext, useMemo } from 'react';
import api from '../services/api';

interface IPlansContext {
  getOffers(): Promise<Array<[]>>;
}

const OffersContext = createContext<IPlansContext>({} as IPlansContext);

export const useOffers = () => useContext(OffersContext);

export default function OffersProvider({ children }: any) {
  async function getOffers() {
    try {
      const { data: offers } = await api.get('/offer');

      return offers;
    } catch (error: any) {
      return new Error(error);
    }
  }

  const values = useMemo(() => ({ getOffers }), []);

  return (
    <OffersContext.Provider value={values}>{children}</OffersContext.Provider>
  );
}
