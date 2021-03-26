import { createGlobalStyle } from 'styled-components';
import { colors, sizes } from './variables'
import HeaderBg from '../images/bg-header-desktop.svg';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Spartan, Helvetica, Sans-Serif;
  }

  .header {
    background: teal url(${HeaderBg}) center no-repeat;
    height: 100px;
    width: 100%;
    background-size: cover;
    position: relative;
    padding: 0 ${sizes.spacing.medium}px;
  }

  .filter {
    background: #fff;
    max-width: 1024px;
    display: flex;
    margin: 0 auto;
    padding: 16px 32px;
    border-radius: 4px;
    box-shadow: 0 8px 16px ${colors.grayShadow};
    transform: translateY(60px);

    .chips {
      flex: 1;
    }
  }

  .container {
    display: block;
    max-width: 1068px;
    margin: ${sizes.spacing.medium * 2}px auto;
    padding: ${sizes.spacing.medium}px;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    color: ${colors.primary};

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    .extra-margin-top {
      margin-top: ${sizes.spacing.large * 5.5}px;
    }

    .filter {
      padding: ${sizes.spacing.medium}px;
    }
  }
`;

export default GlobalStyle;
