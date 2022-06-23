import {createGlobalStyle} from 'styled-components';
import img from '../../assets/img/background-image.png';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
  }
  
  button {
    appearance: none;
    padding: 0;
    margin: 0;
    border: 0;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    user-select: none;
    overflow: visible;

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  }
  body {
    font-size: 13px;
    font-style: normal;
    line-height: 15px;
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    background: url(${img}) no-repeat center center fixed;
    -moz-background-size: 100%;
    -webkit-background-size: 100%;
    -o-background-size: 100%;
    background-size: cover;
    color: var(--color-black);
    
    #root {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      overflow: hidden;
    }  
  }
`;
