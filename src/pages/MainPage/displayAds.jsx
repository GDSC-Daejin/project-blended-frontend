import React, { useEffect } from 'react';
import styled from 'styled-components';

const DisplayAds = () => {
  useEffect(()=>{
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
    catch (err) {
      console.log(err);
    }
  },[])
  return (
    <div>
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7346924817592498"
        data-ad-slot="4291027436"
        data-ad-format="auto"
        data-full-width-responsive="true">
      </ins>
    </div>
  );
};

export default DisplayAds;

export const AdBox = styled.div`
  margin: 0 auto 0 auto;
  //background-color: var(--200);
  width: 100%;
  height: 100px;
  @media all and (min-width: 720px) {
    width: 640px;
  }
  @media all and (max-height: 677px) {
    display: none;
  }
`;