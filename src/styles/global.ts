import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html{
        @media(max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media(max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body,
    button,
    input,
    textarea{
        font-family: ${props => props.theme.bodyFont};
        color: ${props => props.theme.colors.gray300};
        font-size: ${props => props.theme.normalFontSize};
        -webkit-font-smoothing: antialiased;
        font-smooth: always;
    }

    body{
        background-color: ${props => props.theme.colors.body};
        color: ${props => props.theme.colors.gray300};
        transition: .4s; 
    }

    button{
    cursor: pointer;
        border: none;
        outline: none;
    }

    h1,h2,h3{
        color: ${props => props.theme.colors.gray900};
        font-weight: ${props => props.theme.fontNormal};
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    img{
        max-width: 100%;
        height: auto;
    }

    .container {
        margin: 0 auto;
        width: 100%;
        max-width: 1080px;

        @media(max-width: 660px) {
            max-width: 100%;
        }
    }

    .input {
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        row-gap: .4rem;
        min-height: 50px;
    }

    .input__field--error + .input__label {
        color: #de4841;
    }

    .input__label {
        color: ${({ theme }) => theme.colors.gray400};
        font-size: ${({ theme }) => theme.smallerFontSize};
    }

    .input__field {
        width: 100%;
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
        outline: none;
        font-size: ${({ theme }) => theme.normalFontSize};
        padding-top: ${({ theme }) => theme.spacing_4};
        padding-bottom: ${({ theme }) => theme.spacing_12};
        color: ${({ theme }) => theme.colors.gray400};
        font-size: 1rem;
        transition: border 200ms;
        background: transparent;

        ::placeholder {
            color: ${({ theme }) => theme.colors.gray300};
        }

        :focus {
            border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
        }
    }

    .input__field--error {
        border-bottom: 1px solid #de4841;
    }

    .input__error-message {
        color: #de4841;
        font-size: ${({ theme }) => theme.smallerFontSize};
    }
`;

export default GlobalStyle;
