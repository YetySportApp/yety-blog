import { Global, css } from '@emotion/react';
import React from 'react';

const GlobalStyle = () => {
    return (
        <Global
            styles={css`
                *::-webkit-scrollbar {
                    width: 0.35em;
                }
                body::-webkit-scrollbar {
                    width: 0.7em;
                }
                *::-webkit-scrollbar-track {
                    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                }

                *::-webkit-scrollbar-thumb {
                    background-color: rgba(54, 176, 201, 0.5);
                    outline: 1px solid #5fbed1;
                }
            `}
        />
    );
};
export default GlobalStyle;
