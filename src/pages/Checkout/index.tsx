import { FiHelpCircle } from 'react-icons/fi';

import AmericanExpressSvg from '../../assets/images/card-flags/americanexpress.svg?component';
import DinnersClubSvg from '../../assets/images/card-flags/dinnersclub.svg?component';
import EloSvg from '../../assets/images/card-flags/elo.svg?component';
import MastercardSvg from '../../assets/images/card-flags/mastercard.svg?component';
import VisaSvg from '../../assets/images/card-flags/visa.svg?component';
import IuguSvg from '../../assets/images/iugu.svg?component';

import * as S from './styles';

function Checkout() {
  return (
    <S.Container>
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
            <label htmlFor="card" className="input__label">
              Número do cartão
            </label>
            <input
              id="card-number"
              type="text"
              placeholder="0000 0000 0000 0000 0000"
              className="input__field"
            />
          </div>

          <div className="input">
            <label htmlFor="card" className="input__label">
              Número do cartão
            </label>
            <input
              id="card-number"
              type="text"
              placeholder="MM AA"
              className="input__field"
            />
          </div>

          <div className="input">
            <label htmlFor="card" className="input__label">
              Número do cartão
            </label>
            <input
              id="card-number"
              type="text"
              placeholder="000"
              className="input__field"
            />
          </div>

          <div className="input full-width">
            <label htmlFor="card" className="input__label">
              Nome impresso no cartão
            </label>
            <input
              id="card-number"
              type="text"
              placeholder="Seu nome"
              className="input__field"
            />
          </div>

          <div className="input full-width">
            <label htmlFor="card" className="input__label">
              CPF
            </label>
            <input
              id="card-number"
              type="text"
              placeholder="000.000.000-00"
              className="input__field"
            />
          </div>

          <div className="input full-width">
            <label htmlFor="card" className="input__label">
              Cupom
            </label>
            <input
              id="card-number"
              type="text"
              placeholder="Insira aqui"
              className="input__field"
            />
          </div>

          <div className="input full-width">
            <label htmlFor="card" className="input__label">
              Número de parcelas
            </label>
            <select id="card-number" className="input__field">
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

      <S.Plans>
        <div className="header">
          <h1 className="header__title">Confira o seu plano:</h1>
          <span className="header__user-email">fulano@ciclano.com</span>
        </div>

        <ul className="plans">
          <label htmlFor="plan_1" className="plans__plan">
            <div className="plans__data">
              <strong className="plans__label">Anual | À vista</strong>
              <span className="plans__amount">
                De R$ 514,80 | Por R$ 436,90
                <span className="plans__discount">-10%</span>
              </span>
              <span className="plans__installments">10x de R$ 43,69/mês</span>
            </div>
            <input
              id="plan_1"
              type="radio"
              name="plan"
              className="plans__checkmark"
            />
          </label>

          <label htmlFor="plan_2" className="plans__plan">
            <div className="plans__data">
              <strong className="plans__label">Anual | À vista</strong>
              <span className="plans__amount">
                De R$ 514,80 | Por R$ 436,90
                <span className="plans__discount">-7%</span>
              </span>
              <span className="plans__installments">10x de R$ 43,69/mês</span>
            </div>
            <input
              id="plan_2"
              type="radio"
              name="plan"
              className="plans__checkmark"
            />
          </label>
        </ul>

        <div className="plans__about-charge">
          Sobre a cobrança
          <FiHelpCircle size={16} />
        </div>
      </S.Plans>
    </S.Container>
  );
}

export default Checkout;
