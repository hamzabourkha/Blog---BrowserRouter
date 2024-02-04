import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export function Skelet(){
  return (<>
    <h1>Skelet</h1>
    <SkeletonTheme color="#E0E" highlightColor="#F0F0F0">
      <Skeleton height={100} width={300} />
      <Skeleton height={50} width={200} />
    </SkeletonTheme>
    </>);
};
