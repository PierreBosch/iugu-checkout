import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  min-height: 90px;
  background: ${({ theme }) => theme.colors.header};
  display: flex;
  align-items: center;
  position: relative;

  .header__link {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    cursor: pointer;
    width: 40px;
    height: 40px;
    padding: ${({ theme }) => theme.spacing_8};
    position: absolute;
    top: 25px;
  }

  .header__link-icon {
    color: ${({ theme }) => theme.colors.primary};
  }

  .header__logo {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
