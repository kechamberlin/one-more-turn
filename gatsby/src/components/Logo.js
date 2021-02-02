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
  .onemoreturn {
    color: #f5efd7;
    font-size: 1.75rem;
    font-weight: bold;
    text-shadow: 1px 2px 4px black;
    letter-spacing: 0.2rem;
    line-height: 1;
    }
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <div>
        <img src={SiteLogo} alt="Civ VI Wonder Icon" className="icon-logo" />
        <span className="onemoreturn">One More Turn</span>
      </div>
    </LogoStyles>
  );
}
