import styled from 'styled-components';

const HeaderBase = styled.span`
  font-family: Elsie Swash Caps;
  font-style: normal;
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0em;
  text-align: left;
`;

export const H1 = styled(HeaderBase)`
  font-size: 80px;
`;

export const H2 = styled(HeaderBase)`
  font-size: 40px;
`;

export const H3 = styled(HeaderBase)`
  font-size: 32px;
`;
