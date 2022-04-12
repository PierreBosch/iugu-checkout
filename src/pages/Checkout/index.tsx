
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { FiHelpCircle } from 'react-icons/fi';
import MaskedInput from "react-text-mask";
import AmericanExpressSvg from '../../assets/images/card-flags/americanexpress.svg?component';
import DinnersClubSvg from '../../assets/images/card-flags/dinnersclub.svg?component';
import EloSvg from '../../assets/images/card-flags/elo.svg?component';
import MastercardSvg from '../../assets/images/card-flags/mastercard.svg?component';
import VisaSvg from '../../assets/images/card-flags/visa.svg?component';
import IuguSvg from '../../assets/images/iugu.svg?component';
import { useOffers } from '../../contexts/OffersContext';
import { CARD_MASK, CPF_MASK, EXPIRATION_MASK } from '../../helpers/Masks';
import * as S from './styles';
import { paymentSchema } from './validations';


type Offer = {
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

type PaymentRequest = {
  couponCode: string;
  creditCardCPF: string;
  creditCardCVV: string;
  creditCardExpirationDate: string;
  creditCardHolder: string;
  creditCardNumber: string;
  gateway: string;
  installments: string;
  offerId: string;
};

function Checkout() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const { getOffers } = useOffers();

  const paymentForm = useFormik({
    initialValues: {
      couponCode: '',
      creditCardCPF: '',
      creditCardCVV: '',
      creditCardExpirationDate: '',
      creditCardHolder: '',
      creditCardNumber: '',
      gateway: '',
      installments: '',
      offerId: '',
    },
    enableReinitialize: false,
    validateOnMount: true,
    validationSchema: paymentSchema,
    onSubmit: (paymentData: PaymentRequest) => {
      console.log(paymentData);
    },
  });

  useEffect(() => {
    getOffers().then((offersResponse: any) => {
      const [defaultOffer] = offersResponse;
      setOffers(offersResponse);
      setSelectedOffer(defaultOffer);
      paymentForm.setFieldValue('offerId', defaultOffer.id);
    });
  }, []);

  return (
    <S.FormContainer onSubmit={paymentForm.handleSubmit}>
      <S.Payment>
        <div className="header">
          <h1 className="header__title">Estamos quase lá!</h1>

          <span className="header__description">
            Insira seus dados de pagamento abaixo
          </span>
        </div>

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
          <div className="input full-width">
            <label htmlFor="creditCardNumber" className="input__label">
              Número do cartão
            </label>
            <MaskedInput
              mask={CARD_MASK}
              id="creditCardNumber"
              name="creditCardNumber"
              type="text"
              placeholder="0000 0000 0000 0000 0000"
              className="input__field"
              guide={false}
              value={paymentForm.values.creditCardNumber}
              onChange={paymentForm.handleChange}
              onBlur={paymentForm.handleBlur}
            />
            {paymentForm.touched.creditCardNumber && paymentForm.errors.creditCardNumber && (
              <span className="input__error">
                {paymentForm.errors.creditCardNumber}
              </span>
            )}
          </div>

          <div className="input">
            <label htmlFor="creditCardExpirationDate" className="input__label">
              Validade
            </label>
            <MaskedInput
              mask={EXPIRATION_MASK}
              guide={false}
              id="creditCardExpirationDate"
              name="creditCardExpirationDate"
              type="text"
              placeholder="MM AA"
              className="input__field"
              value={paymentForm.values.creditCardExpirationDate}
              onChange={paymentForm.handleChange}
              onBlur={paymentForm.handleBlur}
            />
            {paymentForm.touched.creditCardExpirationDate && paymentForm.errors.creditCardExpirationDate && (
              <span className="input__error">
                {paymentForm.errors.creditCardExpirationDate}
              </span>
            )}
          </div>

          <div className="input">
            <label htmlFor="creditCardCVV" className="input__label">
              Número do cartão
            </label>
            <input
              id="creditCardCVV"
              name="creditCardCVV"
              type="text"
              placeholder="000"
              className="input__field"
              value={paymentForm.values.creditCardCVV}
              onChange={paymentForm.handleChange}
              onBlur={paymentForm.handleBlur}
            />
            {paymentForm.touched.creditCardCVV && paymentForm.errors.creditCardCVV && (
              <span className="input__error">
                {paymentForm.errors.creditCardCVV}
              </span>
            )}
          </div>

          <div className="input full-width">
            <label htmlFor="creditCardHolder" className="input__label">
              Nome impresso no cartão
            </label>
            <input
              id="creditCardHolder"
              name="creditCardHolder"
              type="text"
              placeholder="Seu nome"
              className="input__field"
              value={paymentForm.values.creditCardHolder.toUpperCase()}
              onChange={paymentForm.handleChange}
              onBlur={paymentForm.handleBlur}
            />
            {paymentForm.touched.creditCardHolder && paymentForm.errors.creditCardHolder && (
              <span className="input__error">
                {paymentForm.errors.creditCardHolder}
              </span>
            )}
          </div>

          <div className="input full-width">
            <label htmlFor="creditCardCPF" className="input__label">
              CPF
            </label>
            <MaskedInput
              mask={CPF_MASK}
              guide={false}
              name="creditCardCPF"
              id="creditCardCPF"
              type="text"
              placeholder="000.000.000-00"
              className="input__field"
              value={paymentForm.values.creditCardCPF}
              onChange={paymentForm.handleChange}
              onBlur={paymentForm.handleBlur}
            />
            {paymentForm.touched.creditCardCPF && paymentForm.errors.creditCardCPF && (
              <span className="input__error">
                {paymentForm.errors.creditCardCPF}
              </span>
            )}
          </div>

          <div className="input full-width">
            <label htmlFor="couponCode" className="input__label">
              Cupom
            </label>
            <input
              name="couponCode"
              id="couponCode"
              type="text"
              placeholder="Insira aqui"
              className="input__field"
              value={paymentForm.values.couponCode}
              onChange={paymentForm.handleChange}
              onBlur={paymentForm.handleBlur}
            />
            {paymentForm.touched.couponCode && paymentForm.errors.couponCode && (
              <span className="input__error">
                {paymentForm.errors.couponCode}
              </span>
            )}
          </div>

          <div className="input full-width">
            <label htmlFor="installments" className="input__label">
              Número de parcelas
            </label>
            <select
              name="installments"
              id="installments"
              className="input__field"
              value={paymentForm.values.installments}
              onChange={paymentForm.handleChange}
              onBlur={paymentForm.handleBlur}
              defaultValue={'DEFAULT'}
            >
              <option value="DEFAULT" disabled>
                Selecione
              </option>
              {[...Array(selectedOffer?.installments).keys()].map(
                (item, numeroParcela) => (
                  <option key={item}>{`${numeroParcela + 1}`}</option>
                ))}
            </select>
            {paymentForm.touched.installments && paymentForm.errors.installments && (
              <span className="input__error">
                {paymentForm.errors.installments}
              </span>
            )}
          </div>

          <button type="submit" className="button button-primary full-width">
            Finalizar pagamento
          </button>
        </div>
      </S.Payment>

      <S.Offers>
        <div className="header">
          <h1 className="header__title">Confira o seu plano:</h1>
          <span className="header__user-email">fulano@ciclano.com</span>
        </div>

        <ul className="offers">
          {paymentForm.touched.offerId && paymentForm.errors.offerId && (
            <span className="input__error">
              {paymentForm.errors.offerId}
            </span>
          )}
          {offers.map((offer: Offer) => (
            <label
              key={offer.id}
              htmlFor={`${offer.id}`}
              className="offers__offer"
            >
              <div className="offers__data">
                <strong className="offers__label">{`${offer.title} | ${offer.description}`}</strong>
                <span className="offers__amount">
                  De R$ 514,80 | Por R$ 436,90
                  <span className="offers__discount">
                    {`${offer.discountPercentage * 100 * -1}%`}
                  </span>
                </span>
                <span className="offers__installments">
                  {`${offer.installments}x de R$ 43,69/mês`}
                </span>
              </div>
              <input
                id={`${offer.id}`}
                type="radio"
                name="offerId"
                className="offers__checkmark"
                value={offer.id}
                onChange={(e) => {
                  paymentForm.handleChange(e.target.value);
                  setSelectedOffer(offer);
                }}
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
