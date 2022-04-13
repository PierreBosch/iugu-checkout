const CPF_MASK = [
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];

const CARD_MASK = [
  /[1-9]/,
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const EXPIRATION_MASK = [/\d/, /\d/, "/", /\d/, /\d/];

const SECURITY_CODE_MASK = [/\d/, /\d/, /\d/];

export { EXPIRATION_MASK, SECURITY_CODE_MASK, CPF_MASK, CARD_MASK };
