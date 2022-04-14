import { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../services/api';

interface IPaymentContext {
  paySubscription(payment: any): Promise<void | Error>;
  subscription: any;
}

export type PaymentRequest = {
  couponCode: string;
  creditCardCPF: string;
  creditCardCVV: string;
  creditCardExpirationDate: string;
  creditCardHolder: string;
  creditCardNumber: string;
  gateway?: string;
  installments: string;
  offerId: string;
};

const PaymentContext = createContext<IPaymentContext>({} as IPaymentContext);

export const usePayment = () => useContext(PaymentContext);

export default function PaymentProvider({ children }: any) {
  const [subscription, setSubscription] = useState(null);
  const navigate = useNavigate();

  async function paySubscription(payment: PaymentRequest) {
    try {
      const responseBody = {
        couponCode: payment.couponCode,
        creditCardCPF: payment.creditCardCPF.replace(/[^\d]+/g, ''),
        creditCardCVV: payment.creditCardCVV,
        creditCardExpirationDate: payment.creditCardExpirationDate,
        creditCardHolder: payment.creditCardHolder,
        creditCardNumber: payment.creditCardNumber.replace(/\./g, ''),
        gateway: 'iugu',
        installments: payment.installments,
        offerId: payment.offerId,
        userId: 1,
      };

      const { data: subscriptionResponse } = await api.post('/subscription', {
        ...responseBody,
      });

      setSubscription(subscriptionResponse);
      navigate('/pagamento-efetuado');
    } catch (error: any) {
      toast.error('Ocorreu um erro ao realizar pagamento');
      throw new Error(error);
    }
  }

  const values = useMemo(
    () => ({ paySubscription, subscription }),
    [subscription],
  );

  return (
    <PaymentContext.Provider value={values}>{children}</PaymentContext.Provider>
  );
}
