import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  min-height: calc(100vh - 90px);
  max-width: 870px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.body};
  padding: 4rem 0;
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 330px;
  row-gap: ${({ theme }) => theme.spacing_30};

  .header {
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spacing_8};

    &__title {
      font-size: ${({ theme }) => theme.mediumFontSize};
    }

    &__description {
      font-size: ${({ theme }) => theme.normalFontSize};
      color: ${({ theme }) => theme.colors.gray900};
    }
  }

  .cards {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: ${({ theme }) => theme.spacing_12};
    margin: 0 auto;

    &__flags {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: ${({ theme }) => theme.spacing_12};
    }

    &__flag {
      width: min-content;
    }

    &__powered-by {
      display: flex;
      align-items: center;
      column-gap: ${({ theme }) => theme.spacing_8};
      font-size: ${({ theme }) => theme.smallerFontSize};
    }
  }

  .form {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spacing_30};
    column-gap: ${({ theme }) => theme.spacing_40};

    .full-width {
      grid-column: 1 / 3;
    }

    .input {
      display: flex;
      flex-direction: column;
      height: 50px;

      &__label {
        color: ${({ theme }) => theme.colors.gray400};
        font-size: ${({ theme }) => theme.smallerFontSize};
      }

      &__field {
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
        outline: none;
        font-size: ${({ theme }) => theme.normalFontSize};
        padding-top: ${({ theme }) => theme.spacing_4};
        padding-bottom: ${({ theme }) => theme.spacing_12};
        color: ${({ theme }) => theme.colors.gray300};
        transition: border 300ms;

        ::placeholder {
          color: ${({ theme }) => theme.colors.gray300};
        }

        :focus {
          border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
        }
      }
    }

    .button {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 25px;
      background: ${({ theme }) => theme.colors.primary};
      transition: 300ms;
      color: ${({ theme }) => theme.colors.body};
      font-size: ${({ theme }) => theme.smallFontSize};

      :hover {
        filter: brightness(150%);
      }
    }
  }
`;

export const Offers = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 330px;
  row-gap: ${({ theme }) => theme.spacing_30};

  .header {
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spacing_8};

    &__title {
      font-size: ${({ theme }) => theme.mediumFontSize};
    }

    &__user-email {
      padding: ${({ theme }) => theme.spacing_4}
        ${({ theme }) => theme.spacing_12};
      border: 1px solid ${({ theme }) => theme.colors.gray200};
      color: ${({ theme }) => theme.colors.gray900};
      border-radius: 15px;
      width: min-content;
      font-size: ${({ theme }) => theme.smallerFontSize};
    }
  }

  .offers {
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spacing_12};

    &__offer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${({ theme }) => theme.spacing_20};
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: 15px;
      cursor: pointer;
    }

    &__data {
      display: flex;
      flex-direction: column;
      row-gap: ${({ theme }) => theme.spacing_4};
    }

    &__label {
      color: ${({ theme }) => theme.colors.primary};
      font-size: ${({ theme }) => theme.smallFontSize};
    }

    &__amount {
      display: flex;
      align-items: center;
      column-gap: ${({ theme }) => theme.spacing_12};
      color: ${({ theme }) => theme.colors.primary};
      font-size: ${({ theme }) => theme.smallFontSize};
    }

    &__discount {
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.colors.secondary};
      border-radius: 15px;
      width: 40px;
      color: ${({ theme }) => theme.colors.body};
      font-size: ${({ theme }) => theme.smallerFontSize};
      padding: ${({ theme }) => `${theme.spacing_4} ${theme.spacing_8}`};
    }

    &__installments {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: ${({ theme }) => theme.smallerFontSize};
    }

    &__about-charge {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: ${({ theme }) => theme.spacing_12};
      font-size: ${({ theme }) => theme.smallerFontSize};
      color: ${({ theme }) => theme.colors.gray900};
    }

    &__checkmark {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      border-radius: 50%;
      width: 16px;
      height: 16px;

      border: 2px solid ${({ theme }) => theme.colors.gray300};
      transition: 300ms;

      position: relative;
      top: 4px;
    }

    &__checkmark:checked {
      border: 2px solid ${({ theme }) => theme.colors.body};
      background: ${({ theme }) => theme.colors.primary};
      outline: 2px solid ${({ theme }) => theme.colors.gray300};
    }
  }
`;
