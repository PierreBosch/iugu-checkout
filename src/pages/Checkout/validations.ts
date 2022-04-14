/* eslint-disable no-plusplus */
/* eslint-disable radix */
import * as yup from 'yup';

const paymentSchema = yup.object().shape({
  creditCardHolder: yup
    .string()
    .matches(
      /^[a-zA-Z\u00C0-\u00FF]+ [a-zA-Z \u00C0-\u00FF]+$/,
      'Por favor, digite um nome válido',
    )
    .required('Informe o nome do titular do cartão'),
  creditCardExpirationDate: yup
    .string()
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Data inválida')
    .required('Informe a validade'),
  creditCardNumber: yup
    .string()
    .matches(
      /^(3[47][0-9]{13}|(6541|6556)[0-9]{12}|389[0-9]{11}|3(?:0[0-5]|[68][0-9])[0-9]{11}|65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})|63[7-9][0-9]{13}|(?:2131|1800|35\d{3})\d{11}|9[0-9]{15}|(6304|6706|6709|6771)[0-9]{12,15}|(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}|(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))|(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}|(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]{12}|564182[0-9]{13}|633110[0-9]{10}|633110[0-9]{12}|633110[0-9]{13}|(62[0-9]{14,17})|4[0-9]{12}(?:[0-9]{3})?|(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}))$/,
      'Bandeira não reconhecida',
    )
    .required('Informe o número do cartão'),
  creditCardCVV: yup
    .string()
    .min(3, 'Deve ter no mínimo 3 dígitos')
    .max(4, 'Deve ter no máximo 4 dígitos')
    .matches(/^[0-9]+$/, 'Deve conter apenas números')
    .required('Informe o cvv'),
  installments: yup.string().required('Informe o número de parcelas'),
  offerId: yup.string().required('Escolha um plano'),
  creditCardCPF: yup
    .string()
    .matches(
      /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/,
      'Informe um CPF válido',
    )
    .required('Informe seu CPF')
    .test('cpf', 'Informe um CPF existente', (customerCPF = '') => {
      const cpf = customerCPF.replace(/[^\d]+/g, '');
      let sum;
      let rest;
      sum = 0;
      if (
        cpf === '00000000000' ||
        cpf === '11111111111' ||
        cpf === '22222222222' ||
        cpf === '33333333333' ||
        cpf === '44444444444' ||
        cpf === '55555555555' ||
        cpf === '66666666666' ||
        cpf === '77777777777' ||
        cpf === '88888888888' ||
        cpf === '99999999999'
      )
        return false;

      for (let i = 1; i <= 9; i++)
        sum += parseInt(customerCPF.substring(i - 1, i)) * (11 - i);
      rest = (sum * 10) % 11;

      if (rest === 10 || rest === 11) rest = 0;
      if (rest !== parseInt(customerCPF.substring(9, 10))) return false;

      sum = 0;
      for (let i = 1; i <= 10; i++)
        sum += parseInt(customerCPF.substring(i - 1, i)) * (12 - i);
      rest = (sum * 10) % 11;

      if (rest === 10 || rest === 11) rest = 0;
      if (rest !== parseInt(customerCPF.substring(10, 11))) return false;
      return true;
    }),
});

export { paymentSchema };
