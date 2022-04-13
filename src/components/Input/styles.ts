import styled from 'styled-components';

type InputProps = {
  fullWidth: boolean;
};

export const Container = styled.div<InputProps>`
  ${({ fullWidth }) =>
    fullWidth &&
    `
    grid-column: 1/3;
  `}
`;
