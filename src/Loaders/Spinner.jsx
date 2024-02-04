import React from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export function Spinner(){
  

  return (
    <div>
        <div className="spinner">
          <ClipLoader color="black" css={override} size={30} />
        </div>
    </div>
  );
};

