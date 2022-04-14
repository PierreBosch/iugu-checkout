import { render } from '@testing-library/react';
import ButtonPrimary from '.';
import CustomThemeProvider from '../../contexts/ThemeContext';

test('it should be able render correctly', () => {
  const { getByRole } = render(
    <CustomThemeProvider>
      <ButtonPrimary>Finalizar pagamento</ButtonPrimary>
    </CustomThemeProvider>,
  );

  expect(
    getByRole('button', {
      name: /Finalizar pagamento/i,
    }),
  ).toBeInTheDocument();
});
