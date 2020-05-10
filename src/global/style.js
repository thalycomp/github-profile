import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #fafbfc;
    }

    html, body, #root {
        min-height: 100%;
    }

    body, input, button {
        font-family: Arial, Helvetica, sans-serif;
        color: #31383f;
        font-size: 15px;
    }

    button {
        cursor: pointer;
    }

    header.conteiner-header {
        width: 100%;
        height: 80px;
        background: #2166d6; 
        border-bottom: 1px solid #e1e4e8;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    header.conteiner-header svg {
        margin-left: 10px;
        color: #f6f8fa;
    }

    header.conteiner-header h1 {
        color: #f6f8fa;
        font-size: 20px;
    }

    h2 {
        margin-top: 8px;
        color: #2166d6;
        font-size: 14px;
        text-align: center;
    }
`;