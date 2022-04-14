import { createContext, useContext, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';

interface IOffersContext {
  getOffers(): Promise<Offer[]> | Promise<Error | undefined>;
  setSelectedOffer: (offer: Offer) => any;
  selectedOffer: Offer | null;
}

export type Offer = {
  acceptsCoupon: boolean;
  caption: string;
  description: string;
  discountAmmount: number;
  discountCouponCode: string;
  discountPercentage: number;
  fullPrice: number;
  gateway: string;
  id: number;
  installments: number;
  order: number;
  period: string;
  periodLabel: string;
  priority: number;
  splittable: boolean;
  storeId: string;
  title: string;
};

const OffersContext = createContext<IOffersContext>({} as IOffersContext);

export const useOffers = () => useContext(OffersContext);

export default function OffersProvider({ children }: any) {
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  async function getOffers() {
    try {
      const { data: offers } = await api.get('/offer');
      return offers;
    } catch (error: any) {
      toast.error('Ocorreu um erro ao trazer os planos');
      throw new Error(error);
    }
  }

  const values = useMemo(
    () => ({ getOffers, setSelectedOffer, selectedOffer }),
    [selectedOffer],
  );

  return (
    <OffersContext.Provider value={values}>{children}</OffersContext.Provider>
  );
}
