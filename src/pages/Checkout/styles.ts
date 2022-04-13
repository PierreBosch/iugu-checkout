import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  min-height: calc(100vh - 90px);
  max-width: 870px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  column-gap: ${({ theme }) => theme.spacing_16};
  background: ${({ theme }) => theme.colors.body};
  padding: ${({ theme }) => `${theme.spacing_40} ${theme.spacing_30}`};

  @media (max-width: 660px) {
    flex-direction: column-reverse;
    row-gap: 2rem;
    padding: 2rem;
  }

  @media (max-width: 385px) {
    padding: 1rem;
  }
`;

export const Payment = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  max-width: 330px;
  row-gap: ${({ theme }) => theme.spacing_30};

  @media (max-width: 660px) {
    max-width: 100%;
  }

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
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-direction: column;
    align-items: flex-start;
    row-gap: ${({ theme }) => theme.spacing_30};
    column-gap: ${({ theme }) => theme.spacing_40};

    .full-width {
      grid-column: 1/3;
    }
  }
`;

export const Offers = styled.section`
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
      column-gap: 0.5rem;

      :hover .offers__discount {
        transition: 200ms ease-in-out;
        transform: translateY(-0.25rem);
      }
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
      transition: 200ms ease-in-out;
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
      cursor: pointer;

      .offers__icon {
        transition: 200ms ease-in-out;
      }

      :hover .offers__icon {
        transition: 200ms ease-in-out;
        transform: translateY(-0.25rem);
      }
    }

    &__checkmark {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      border-radius: 50%;
      width: 16px;
      height: 16px;

      border: 2px solid ${({ theme }) => theme.colors.gray300};
      transition: 200ms;

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
