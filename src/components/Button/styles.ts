import styled from 'styled-components';

type ButtonProps = {
  withIcon: boolean;
};

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background: ${({ theme }) => theme.colors.primary};
  transition: 200ms;
  color: ${({ theme }) => theme.colors.body};
  font-size: ${({ theme }) => theme.smallFontSize};
  ${({ withIcon }) =>
    withIcon &&
    `
    column-gap: 0.75rem};
  `}

  :hover {
    filter: brightness(150%);
  }
`;
