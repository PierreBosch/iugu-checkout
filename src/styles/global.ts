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
        font-family: ${(props) => props.theme.bodyFont};
        color: ${(props) => props.theme.colors.gray300};
        font-size: ${(props) => props.theme.normalFontSize};
        -webkit-font-smoothing: antialiased;
        font-smooth: always;
    }

    body{
        background-color: ${(props) => props.theme.colors.body};
        color: ${(props) => props.theme.colors.gray300};
        transition: .4s; 
    }

    button{
    cursor: pointer;
        border: none;
        outline: none;
    }

    h1,h2,h3{
        color: ${(props) => props.theme.colors.gray900};
        font-weight: ${(props) => props.theme.fontNormal};
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
    }
`;

export default GlobalStyle;
