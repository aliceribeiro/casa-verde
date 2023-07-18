import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  background: #fafafa;
  margin-top: 270px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #202020;
  padding: 24px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;

  p {
    color: #bdbdbd;
  }
`;

export const ItemIcon = styled.div`
  width: 52px;
  height: 52px;
  background-color: #ffcb47;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;
