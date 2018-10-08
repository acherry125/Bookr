import * as General from 'components/presentational/styled';
import styled from 'styled-components';

export const SearchForm = styled.form.attrs({
  onSubmit: (props) => props.onSubmit
})`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;

export const SearchLabel = styled.label`

`;

export const SearchInput = styled.input`
  padding: 0.5em;
  width: 15em;
  max-width: 70%;
  font-size: 1.25em;
`;