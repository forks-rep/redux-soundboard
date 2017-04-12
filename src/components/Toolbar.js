import React from 'react';
import styled from 'styled-components';

const StyledToolbar = styled.nav`
  display: flex;
  background: #333;
  justify-content: center;
`;

const Heading = styled.h1`
  color: white;
`;

export default ({name}) => (
  <StyledToolbar>
    <Heading>{name}</Heading>
  </StyledToolbar>
);
