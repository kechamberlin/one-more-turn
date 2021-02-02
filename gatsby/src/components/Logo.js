import React from 'react';
import styled from 'styled-components';
import SiteLogo from '../assets/images/Icon_district_wonder.png';

const LogoStyles = styled.div`
  font-size: 5px;
  width: 30em;
  height: 30em;
  margin: 0;
  display: flex;
  text-align: center;
    line-height: 1;
    }
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <div className="inner">
        <span className="est">EST 1994</span>
        <h1>
          <span className="slicks">
            <span className="letter S">S</span>
            <span className="letter l">l</span>
            <span className="letter i">i</span>
            <span className="letter c">c</span>
            <span className="letter k">k</span>
            <span className="letter apos">'</span>
            <span className="letter s">s</span>
          </span>
          <span className="slices">slices</span>
        </h1>
      </div>
    </LogoStyles>
  );
}
