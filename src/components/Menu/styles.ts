import styled from 'styled-components';

export const Header = styled.header`
  width: 100;
  margin-top: 10px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
    padding: 0 0 0 16px;
  }
`;

export const NavMenu = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-wrap: wrap;

  @media (min-width: 920px) {
    justify-content: flex-end;
  }

  li {
    list-style: none;
    font-size: 12px;

    @media (min-width: 920px) {
      font-size: 16px;
    }
  }

  li a {
    display: inline-block;
    font-weight: 400;
    font-size: inherit;
    line-height: 1.1;
    text-decoration: none;
    color: #202020;
    padding: 8px;

    @media (min-width: 920px) {
      padding: 16px;
    }
  }
`;
