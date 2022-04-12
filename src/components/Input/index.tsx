import { FC, InputHTMLAttributes } from 'react';
import MaskedInput from 'react-text-mask';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  errorMessage: string | null;
  fullWidth?: boolean;
  hasMask?: boolean;
  mask?: (string | RegExp)[];
  guide?: boolean;
}

const Input: FC<InputProps> = ({
  name,
  label,
  errorMessage,
  guide = false,
  hasMask = false,
  mask = [''],
  fullWidth = false,
  ...rest
}) => {
  return (
    <S.Container className="input" fullWidth={fullWidth}>
      {errorMessage !== null && (
        <span className="input__error-message">{errorMessage}</span>
      )}

      {!hasMask && (
        <input
          id={name}
          name={name}
          className={`input__field ${
            errorMessage ? 'input__field--error' : ''
          }`}
          {...rest}
        />
      )}

      {hasMask && (
        <MaskedInput
          guide={guide}
          mask={mask}
          id={name}
          name={name}
          className={`input__field ${
            errorMessage ? 'input__field--error' : ''
          }`}
          {...rest}
        />
      )}

      <label htmlFor={name} className="input__label">
        {label}
      </label>
    </S.Container>
  );
};

export default Input;
