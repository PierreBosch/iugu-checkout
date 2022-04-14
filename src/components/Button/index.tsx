/* eslint-disable react/jsx-props-no-spreading */
import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  withIcon: boolean;
  classes: string | '';
}

function ButtonPrimary({
  withIcon = false,
  classes = '',
  children,
  ...rest
}: ButtonPrimaryProps) {
  return (
    <S.Button withIcon={withIcon} className={`button ${classes}`} {...rest}>
      {children}
    </S.Button>
  );
}

export default ButtonPrimary;
