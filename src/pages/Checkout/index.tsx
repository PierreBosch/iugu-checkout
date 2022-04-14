/* eslint-disable import/no-cycle */
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { FiHelpCircle } from 'react-icons/fi';
import AmericanExpressSvg from '../../assets/images/card-flags/americanexpress.svg?component';
import DinnersClubSvg from '../../assets/images/card-flags/dinnersclub.svg?component';
import EloSvg from '../../assets/images/card-flags/elo.svg?component';
import MastercardSvg from '../../assets/images/card-flags/mastercard.svg?component';
import VisaSvg from '../../assets/images/card-flags/visa.svg?component';
import IuguSvg from '../../assets/images/iugu.svg?component';
import ButtonPrimary from '../../components/Button';
import Input from '../../components/Input';
import { Offer, useOffers } from '../../contexts/OffersContext';
import { PaymentRequest, usePayment } from '../../contexts/PaymentContext';
import { formatter } from '../../helpers/CurrencyFormatter';
import { CARD_MASK, CPF_MASK, EXPIRATION_MASK } from '../../helpers/Masks';
import * as S from './styles';
import { paymentSchema } from './validations';

function Checkout() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const { getOffers, selectedOffer, setSelectedOffer } = useOffers();
  const { paySubscription } = usePayment();

  const paymentForm = useFormik({
    initialValues: {
      couponCode: '',
      creditCardCPF: '',
      creditCardCVV: '',
      creditCardExpirationDate: '',
      creditCardHolder: '',
      creditCardNumber: '',
      installments: '1',
      offerId: '',
    },
    enableReinitialize: false,
    validateOnMount: true,
    validationSchema: paymentSchema,
    onSubmit: (paymentData: PaymentRequest, actions) => {
      paySubscription(paymentData).then(() => {
        actions.setSubmitting(false);
      });
    },
  });

  useEffect(() => {
    getOffers().then((offersResponse: any) => {
      const [defaultOffer] = offersResponse;

      paymentForm.setFieldValue('offerId', defaultOffer.id);

      setOffers(offersResponse);
      setSelectedOffer(defaultOffer);
    });
  }, []);

  return (
    <S.FormContainer onSubmit={paymentForm.handleSubmit}>
      <S.Payment>
        <header className="header">
          <h1 className="header__title">Estamos quase lá!</h1>

          <span className="header__description">
            Insira seus dados de pagamento abaixo
          </span>
        </header>

        <div className="cards">
          <ul className="cards__flags">
            <li className="cards__flag">
              <AmericanExpressSvg />
            </li>

            <li className="cards__flag">
              <DinnersClubSvg />
            </li>

            <li className="cards__flag">
              <EloSvg />
            </li>

            <li className="cards__flag">
              <MastercardSvg />
            </li>

            <li className="cards__flag">
              <VisaSvg />
            </li>
          </ul>

          <span className="cards__powered-by">
            Pagamento por
            <IuguSvg />
          </span>
        </div>

        <div className="form">
          <Input
            fullWidth
            label="Número do cartão"
            mask={CARD_MASK}
            hasMask
            id="creditCardNumber"
            name="creditCardNumber"
            type="text"
            placeholder="0000 0000 0000 0000 0000"
            guide={false}
            value={paymentForm.values.creditCardNumber}
            onChange={({ target: { value } }) =>
              paymentForm.setFieldValue(
                'creditCardNumber',
                value.replace(/[^0-9]/g, ''),
              )
            }
            onBlur={paymentForm.handleBlur}
            errorMessage={
              paymentForm.touched.creditCardNumber &&
              paymentForm.errors.creditCardNumber
                ? paymentForm.errors.creditCardNumber
                : null
            }
          />

          <Input
            label="Validade"
            mask={EXPIRATION_MASK}
            hasMask
            guide={false}
            id="creditCardExpirationDate"
            name="creditCardExpirationDate"
            type="text"
            placeholder="MM AA"
            value={paymentForm.values.creditCardExpirationDate}
            onChange={paymentForm.handleChange}
            onBlur={paymentForm.handleBlur}
            errorMessage={
              paymentForm.touched.creditCardExpirationDate &&
              paymentForm.errors.creditCardExpirationDate
                ? paymentForm.errors.creditCardExpirationDate
                : null
            }
          />

          <Input
            label="CVV"
            id="creditCardCVV"
            name="creditCardCVV"
            type="text"
            placeholder="000"
            value={paymentForm.values.creditCardCVV}
            onChange={paymentForm.handleChange}
            onBlur={paymentForm.handleBlur}
            errorMessage={
              paymentForm.touched.creditCardCVV &&
              paymentForm.errors.creditCardCVV
                ? paymentForm.errors.creditCardCVV
                : null
            }
          />

          <Input
            fullWidth
            label="Nome impresso no cartão"
            id="creditCardHolder"
            name="creditCardHolder"
            type="text"
            placeholder="Seu nome"
            value={paymentForm.values.creditCardHolder.toUpperCase()}
            onChange={paymentForm.handleChange}
            onBlur={paymentForm.handleBlur}
            errorMessage={
              paymentForm.touched.creditCardHolder &&
              paymentForm.errors.creditCardHolder
                ? paymentForm.errors.creditCardHolder
                : null
            }
          />

          <Input
            fullWidth
            mask={CPF_MASK}
            label="CPF"
            hasMask
            guide={false}
            name="creditCardCPF"
            id="creditCardCPF"
            type="text"
            placeholder="000.000.000-00"
            value={paymentForm.values.creditCardCPF}
            onChange={paymentForm.handleChange}
            onBlur={paymentForm.handleBlur}
            errorMessage={
              paymentForm.touched.creditCardCPF &&
              paymentForm.errors.creditCardCPF
                ? paymentForm.errors.creditCardCPF
                : null
            }
          />

          <Input
            fullWidth
            label="Cupom"
            name="couponCode"
            id="couponCode"
            type="text"
            placeholder="Insira aqui"
            value={paymentForm.values.couponCode}
            onChange={paymentForm.handleChange}
            onBlur={paymentForm.handleBlur}
            errorMessage={
              paymentForm.touched.couponCode && paymentForm.errors.couponCode
                ? paymentForm.errors.couponCode
                : null
            }
          />

          <div className="input full-width">
            {paymentForm.touched.installments &&
              paymentForm.errors.installments && (
                <span className="input__error-message">
                  {paymentForm.errors.installments}
                </span>
              )}
            <select
              name="installments"
              id="installments"
              className={`input__field ${
                paymentForm.touched.installments &&
                paymentForm.errors.installments &&
                'input__field--error'
              }`}
              value={paymentForm.values.installments}
              onChange={paymentForm.handleChange}
              onBlur={paymentForm.handleBlur}
              data-testid="installments"
            >
              <option value="DEFAULT" disabled>
                Selecione
              </option>
              {[...Array(selectedOffer?.installments).keys()].map(
                (item, numeroParcela) => (
                  <option key={item}>{`${numeroParcela + 1}`}</option>
                ),
              )}
            </select>
            <label htmlFor="installments" className="input__label">
              Número de parcelas
            </label>
          </div>

          <ButtonPrimary
            disabled={paymentForm.isSubmitting || !paymentForm.isValid}
            type="submit"
            classes="full-width"
          >
            Finalizar pagamento
          </ButtonPrimary>
        </div>
      </S.Payment>

      <S.Offers>
        <header className="header">
          <h1 className="header__title">Confira o seu plano:</h1>
          <span className="header__user-email">fulano@ciclano.com</span>
        </header>

        <ul className="offers">
          {paymentForm.touched.offerId && paymentForm.errors.offerId && (
            <span className="input__error">{paymentForm.errors.offerId}</span>
          )}
          {offers.map((offer: Offer, index) => (
            <label
              key={offer.id}
              htmlFor={`${offer.id}`}
              className="offers__offer"
            >
              <div className="offers__data">
                <strong className="offers__label">{`${offer.title} | ${offer.description}`}</strong>
                <span className="offers__amount">
                  De {formatter.format(offer.fullPrice)} | Por{' '}
                  {formatter.format(offer.fullPrice - offer.discountAmmount)}
                  <span className="offers__discount">
                    {`${offer.discountPercentage * 100 * -1}%`}
                  </span>
                </span>
                <span className="offers__installments">
                  {`${offer.installments}x de ${formatter.format(
                    (offer.fullPrice - offer.discountAmmount) /
                      offer.installments,
                  )}/mês`}
                </span>
              </div>
              <input
                id={`${offer.id}`}
                type="radio"
                name="offerId"
                className="offers__checkmark"
                value={offer.id}
                checked={offer.id.toString() === selectedOffer?.id.toString()}
                onChange={e => {
                  paymentForm.handleChange(e.target.value);
                  setSelectedOffer(offer);
                }}
                data-testid={`offerId-${index}`}
                onBlur={paymentForm.handleBlur}
              />
            </label>
          ))}
        </ul>

        <div className="offers__about-charge">
          Sobre a cobrança
          <FiHelpCircle className="offers__icon" size={16} />
        </div>
      </S.Offers>
    </S.FormContainer>
  );
}

export default Checkout;
