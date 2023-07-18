import { styled } from 'styled-components';

const ParagraphBase = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0em;
  text-align: left;
`;

export const TextLarge = styled(ParagraphBase)`
  font-size: 24px;
`;

export const TextMedium = styled(ParagraphBase)`
  font-size: 16px;
`;
export const TextSmall = styled(ParagraphBase)`
  font-size: 12px;
`;
