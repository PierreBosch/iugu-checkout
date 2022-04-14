import { act, fireEvent, render } from '@testing-library/react';
import Checkout from '.';
import OffersProvider from '../../contexts/OffersContext';
import CustomThemeProvider from '../../contexts/ThemeContext';

jest.mock('../../contexts/OffersContext', () => ({
  useOffers() {
    return {
      getOffers() {
        return [
          {
            id: 32,
            storeId: 'anual_parcelado_iugu',
            title: 'Premium Anual',
            description: 'Parcelado',
            caption: '7 Dias Grátis',
            fullPrice: 600,
            discountAmmount: 60,
            discountPercentage: 0.1,
            periodLabel: 'mês',
            period: 'annually',
            discountCouponCode: null,
            order: 1,
            priority: 1,
            gateway: 'iugu',
            splittable: true,
            installments: 12,
            acceptsCoupon: true,
          },
          {
            id: 33,
            storeId: 'anual_a_vista_iugu',
            title: 'Premium Anual',
            description: 'À Vista',
            caption: '7 Dias Grátis',
            fullPrice: 7200,
            discountAmmount: 720,
            discountPercentage: 0.1,
            periodLabel: 'ano',
            period: 'annually',
            discountCouponCode: null,
            order: 2,
            priority: 2,
            gateway: 'iugu',
            splittable: false,
            installments: 1,
            acceptsCoupon: true,
          },
        ];
      },
    };
  },
}));

it('should be able to render button submit', async () => {
  const { getByPlaceholderText, getByTestId, getByRole } = render(
    <CustomThemeProvider>
      <OffersProvider>
        <Checkout />
      </OffersProvider>
    </CustomThemeProvider>,
  );

  const creditCardNumber: any = getByPlaceholderText(
    '0000 0000 0000 0000 0000',
  );
  const creditCardExpirationDate: any = getByPlaceholderText('MM AA');
  const creditCardCVV: any = getByPlaceholderText('000');
  const creditCardHolder: any = getByPlaceholderText('Seu nome');
  const creditCardCPF: any = getByPlaceholderText('000.000.000-00');
  const couponCode: any = getByPlaceholderText('Insira aqui');
  const installments: any = getByTestId('installments');
  const offerId: any = getByTestId('offerId-0');

  await act(async () => {
    fireEvent.change(creditCardNumber, {
      target: { value: '5175755921890072' },
    });
    fireEvent.change(creditCardExpirationDate, { target: { value: '11/26' } });
    fireEvent.change(creditCardCVV, { target: { value: '318' } });
    fireEvent.change(creditCardHolder, {
      target: { value: 'SPIDER MAN DA SILVA' },
    });
    fireEvent.change(creditCardCPF, { target: { value: '38334472064' } });
    fireEvent.change(couponCode, { target: { value: 'CUPOM30' } });
    fireEvent.change(installments, { target: { value: '1' } });
    fireEvent.change(offerId, { target: { value: '18' } });
  });

  const submitButton = getByRole('button', { name: /Finalizar pagamento/i });

  expect(submitButton).toBeInTheDocument();
});
