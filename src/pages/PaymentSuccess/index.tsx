import { useEffect } from 'react';
import { FiCheck, FiStar } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import ButtonPrimary from '../../components/Button';
import { useOffers } from '../../contexts/OffersContext';
import { formatter } from '../../helpers/CurrencyFormatter';
import * as S from './styles';

function PaymentSuccess() {
  const navigate = useNavigate();
  const { selectedOffer } = useOffers();

  useEffect(() => {
    if (selectedOffer === null) navigate('/');
  }, []);

  return (
    <S.Container>
      <header className="header">
        <div className="header__icon">
          <FiCheck />
        </div>

        <h1 className="header__title">Parabéns</h1>
        <p className="header__description">
          Sua assinatura foi realizada com sucesso.{' '}
        </p>
      </header>

      <main className="subscription">
        <div className="subscription__offer">
          <div className="subscription__icon">
            <FiStar />
          </div>

          <div className="subscription__data">
            <span className="subscription__title">{selectedOffer?.title}</span>
            <div className="subscription__installments">
              {selectedOffer &&
                formatter.format(
                  selectedOffer.fullPrice - selectedOffer.discountAmmount,
                )}
              | {selectedOffer?.installments}x{' '}
              {selectedOffer &&
                formatter.format(
                  (selectedOffer.fullPrice - selectedOffer.discountAmmount) /
                    selectedOffer.installments,
                )}
            </div>
          </div>
        </div>

        <ul className="customer">
          <li className="customer__item">
            <span className="customer__label">E-mail</span>
            <span className="customer__content">fulano@ciclano.com.br</span>
          </li>

          <li className="customer__item">
            <span className="customer__label">CPF</span>
            <span className="customer__content">000.000.000-00</span>
          </li>
        </ul>
      </main>

      <footer className="actions">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="actions__action"
        >
          Gerenciar Assinatura
        </button>

        <ButtonPrimary
          onClick={() => navigate('/')}
          withIcon={false}
          classes=""
        >
          IR PARA HOME
        </ButtonPrimary>
      </footer>
    </S.Container>
  );
}

export default PaymentSuccess;
