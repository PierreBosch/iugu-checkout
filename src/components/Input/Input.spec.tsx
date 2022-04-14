import { act, fireEvent, render } from '@testing-library/react';
import Input from '.';
import CustomThemeProvider from '../../contexts/ThemeContext';
import { CPF_MASK } from '../../helpers/Masks';

it('should be able to change input value', async () => {
  const { getByPlaceholderText } = render(
    <CustomThemeProvider>
      <Input name="name" placeholder="Nome" label="Fulano" />
    </CustomThemeProvider>,
  );

  const inputName: any = getByPlaceholderText('Nome');

  await act(async () => {
    fireEvent.change(inputName, { target: { value: 'Ciclano' } });
  });

  expect(inputName.value).toBe('Ciclano');
});

it('should be able render input with a mask', async () => {
  const { getByPlaceholderText } = render(
    <CustomThemeProvider>
      <Input name="cpf" placeholder="CPF" label="CPF" hasMask mask={CPF_MASK} />
    </CustomThemeProvider>,
  );

  const inputName: any = getByPlaceholderText('CPF');

  await act(async () => {
    fireEvent.change(inputName, { target: { value: '20989494055' } });
  });

  expect(inputName.value).toBe('209.894.940-55');
});

it('should be able render input error', async () => {
  const { getByPlaceholderText, getByText } = render(
    <CustomThemeProvider>
      <Input
        name="cpf"
        placeholder="CPF"
        label="CPF"
        errorMessage="CPF inválido"
      />
    </CustomThemeProvider>,
  );

  const inputName: any = getByPlaceholderText('CPF');

  await act(async () => {
    fireEvent.change(inputName, { target: { value: '20989494055' } });
  });

  expect(getByText('CPF inválido')).toBeInTheDocument();
});
