import styled from 'styled-components';
import { Input } from './general';

export const BookOutline = styled.div`
  max-width: 800px;
  width: 100%;
  --placeholder: #a7a7a7;
  @media only screen and (min-width: 40em) {
    padding: 4rem 2rem;
    border: 1px solid var(--gray);
    box-shadow: -10px 1px 1rem var(--gray);
  }
`;

export const BookTitle = styled(Input).attrs({
  type: "text"
})`
  font-size: 1.5rem;
`;