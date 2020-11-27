import { Global, css } from "@emotion/core";
import React from "react";

const GlobalStyles = () => (
    <>
        <Global
            styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
      `}
        />
        <Global
            styles={css`
        input,
        button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          outline: none;
          border-style: none;
        }
      `}
        />
        <Global
            styles={css`
        body,
        html {
          background-color: #FFC0CB;
          font-size: 18px;
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          padding-top: 100px;
        }
      `}
        />
    </>
);

export default GlobalStyles;
