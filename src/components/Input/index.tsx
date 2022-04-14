/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { InputHTMLAttributes } from 'react';
import MaskedInput from 'react-text-mask';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  errorMessage?: string | null;
  fullWidth?: boolean;
  hasMask?: boolean;
  mask?: (string | RegExp)[];
  guide?: boolean;
}

function Input({
  name,
  label,
  errorMessage = null,
  guide = false,
  hasMask = false,
  mask = [''],
  fullWidth = false,
  ...rest
}: InputProps) {
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
            errorMessage !== null ? 'input__field--error' : ''
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
            errorMessage !== null ? 'input__field--error' : ''
          }`}
          {...rest}
        />
      )}

      <label htmlFor={name} className="input__label">
        {label}
      </label>
    </S.Container>
  );
}

export default Input;
