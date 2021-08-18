import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    html {
        &::-webkit-scrollbar {
            width: 5px;
            height: 5px;
        }
        &::-webkit-scrollbar-track {
            background-color: #2e2e48;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #465EAD;
            border-radius: 10px;
        }
    }

    body {
        background: #2A2A42;
    }
`
export default GlobalStyles
