import { ButtonHTMLAttributes, FC } from 'react';
import * as S from './styles';

interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  withIcon?: boolean;
  classes?: string;
}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  withIcon = false,
  children,
  classes,
  ...rest
}) => {
  return (
    <S.Button withIcon={withIcon} className={`button ${classes}`} {...rest}>
      {children}
    </S.Button>
  );
};

export default ButtonPrimary;
