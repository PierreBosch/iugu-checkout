import { useEffect, useState } from 'react';
import { FiHelpCircle } from 'react-icons/fi';

import AmericanExpressSvg from '../../assets/images/card-flags/americanexpress.svg?component';
import DinnersClubSvg from '../../assets/images/card-flags/dinnersclub.svg?component';
import EloSvg from '../../assets/images/card-flags/elo.svg?component';
import MastercardSvg from '../../assets/images/card-flags/mastercard.svg?component';
import VisaSvg from '../../assets/images/card-flags/visa.svg?component';
import IuguSvg from '../../assets/images/iugu.svg?component';
import { useOffers } from '../../contexts/OffersContext';

import * as S from './styles';

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

function Checkout() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const { getOffers } = useOffers();

  useEffect(() => {
    getOffers().then((offersResponse: any) => setOffers(offersResponse));
  }, []);

  return (
    <S.FormContainer>
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

        <form className="form">
          <div className="input full-width">
            <label htmlFor="creditCardNumber" className="input__label">
              Número do cartão
            </label>
            <input
              id="creditCardNumber"
              name="creditCardNumber"
              type="text"
              placeholder="0000 0000 0000 0000 0000"
              className="input__field"
            />
          </div>

          <div className="input">
            <label htmlFor="creditCardExpirationDate" className="input__label">
              Validade
            </label>
            <input
              id="creditCardExpirationDate"
              name="creditCardExpirationDate"
              type="text"
              placeholder="MM AA"
              className="input__field"
            />
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
            />
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
            />
          </div>

          <div className="input full-width">
            <label htmlFor="creditCardCPF" className="input__label">
              CPF
            </label>
            <input
              name="creditCardCPF"
              id="creditCardCPF"
              type="text"
              placeholder="000.000.000-00"
              className="input__field"
            />
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
            />
          </div>

          <div className="input full-width">
            <label htmlFor="installments" className="input__label">
              Número de parcelas
            </label>
            <select
              name="installments"
              id="installments"
              className="input__field"
            >
              <option value="" disabled selected>
                Selecionar
              </option>
            </select>
          </div>

          <button type="submit" className="button button-primary full-width">
            Finalizar pagamento
          </button>
        </form>
      </S.Payment>

      <S.Offers>
        <div className="header">
          <h1 className="header__title">Confira o seu plano:</h1>
          <span className="header__user-email">fulano@ciclano.com</span>
        </div>

        <ul className="offers">
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
                name="offer"
                className="offers__checkmark"
              />
            </label>
          ))}
        </ul>

        <div className="offers__about-charge">
          Sobre a cobrança
          <FiHelpCircle size={16} />
        </div>
      </S.Offers>
    </S.FormContainer>
  );
}

export default Checkout;
