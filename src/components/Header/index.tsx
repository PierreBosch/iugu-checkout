import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import WhiteBookSvg from '../../assets/images/white-book.svg?component';
import * as S from './styles';

function Header() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <button
        onClick={() => navigate(-1)}
        className="header__link"
        type="button"
      >
        <FiChevronLeft className="header__link-icon" size={24} />
      </button>

      <div className="header__logo">
        <WhiteBookSvg />
      </div>
    </S.Container>
  );
}

export { Header };
