import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

const Checkout = React.lazy(() => import('./pages/Checkout'));
const PaymentSuccess = React.lazy(() => import('./pages/PaymentSuccess'));

const AppRoutes = () => {
  const Loading = () => <p>Carregando ...</p>;

  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Checkout />} />
        <Route path="/pagamento-efetuado" element={<PaymentSuccess />} />
      </Routes>
    </React.Suspense>
  );
};
export default AppRoutes;
