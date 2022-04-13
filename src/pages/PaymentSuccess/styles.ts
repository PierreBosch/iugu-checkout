import styled, { keyframes } from 'styled-components';

const toAppear = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${({ theme }) => theme.spacing_40};
  max-width: 340px;
  margin: 0 auto;
  margin-top: 72px;
  animation: ${toAppear} 600ms;

  @media (max-width: 360px) {
    padding: ${({ theme }) => theme.spacing_20};
  }

  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: ${({ theme }) => theme.spacing_16};
    justify-content: center;
    animation: ${toAppear} 600ms forwards;
    animation-delay: 300ms;
    opacity: 0;

    &__icon {
      width: 4rem;
      height: 4rem;
      border: 1px solid ${({ theme }) => theme.colors.gray100};
      border-radius: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        font-size: 30px;
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    &__title {
      font-size: ${({ theme }) => theme.mediumFontSize};
      ${({ theme }) => theme.colors.primary};
    }

    &__description {
      color: ${({ theme }) => theme.colors.gray300};
      width: 200px;
      text-align: center;
      line-height: 150%;
    }
  }

  .subscription {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: ${({ theme }) => theme.spacing_16};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    animation: ${toAppear} 600ms forwards;
    animation-delay: 600ms;
    opacity: 0;
    padding: ${({ theme }) => theme.spacing_16};

    &__icon {
      width: 40px;
      height: 40px;
      background-color: ${({ theme }) => theme.colors.gray200};
      border-radius: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    &__offer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: ${({ theme }) => theme.colors.gray100};
      padding: ${({ theme }) => theme.spacing_20};
      border-radius: 15px;

      @media (max-width: 280px) {
        flex-direction: column;
        align-items: center;
        row-gap: ${({ theme }) => theme.spacing_16};
      }
    }

    &__data {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      row-gap: ${({ theme }) => theme.spacing_8};
      font-size: ${({ theme }) => theme.smallFontSize};

      @media (max-width: 280px) {
        align-items: center;
        text-align: center;
        line-height: 150%;
      }
    }

    &__title {
      color: ${({ theme }) => theme.colors.primary};
    }

    &__installments {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .customer {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spacing_16};

    &__item {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${({ theme }) => `${theme.spacing_4} ${theme.spacing_20}`};
    }

    &__label {
      font-size: ${({ theme }) => theme.smallerFontSize};
    }

    &__content {
      color: ${({ theme }) => theme.colors.gray900};
      font-size: ${({ theme }) => theme.smallerFontSize};
    }
  }

  .actions {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spacing_24};
    animation: ${toAppear} 600ms forwards;
    animation-delay: 1s;
    opacity: 0;

    &__action {
      font-size: ${({ theme }) => theme.smallerFontSize};
      color: ${({ theme }) => theme.colors.primary};
      text-align: center;
      background: transparent;
      font-weight: ${({ theme }) => theme.fontBold};
    }
  }
`;
