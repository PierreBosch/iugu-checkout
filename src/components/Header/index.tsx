import * as S from './styles';
import WhiteBookSvg from '../../assets/images/white-book.svg?component';
import { FiChevronLeft } from 'react-icons/fi';

const Header = () => {
  return (
    <S.Container>
      <div className="header__navigation">
        <a href="!#" className="header__link">
          <FiChevronLeft className="header__link-icon" size={24} />
        </a>
      </div>

      <div className="header__logo">
        <WhiteBookSvg />
      </div>
    </S.Container>
  );
};

export { Header };
