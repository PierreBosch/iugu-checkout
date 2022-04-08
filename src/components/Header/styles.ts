import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  min-height: 90px;
  background: ${(props) => props.theme.bodyFont};
  display: flex;
  align-items: center;

  .header__link-icon {
    color: ${(props) => props.theme.colors.primary};
  }

  .header__logo {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
