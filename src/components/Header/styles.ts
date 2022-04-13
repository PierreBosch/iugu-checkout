import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  min-height: 90px;
  background: ${({ theme }) => theme.colors.header};
  display: flex;
  align-items: center;

  .header__navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
  }

  .header__link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.spacing_8};
  }

  .header__link-icon {
    color: ${({ theme }) => theme.colors.primary};
  }

  .header__logo {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-left: -40px;
  }
`;
