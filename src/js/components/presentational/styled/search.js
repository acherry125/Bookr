import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;

export const SearchTitle = styled.h2`
  color: #000;
  align-self: flex-start;
`;

export const SearchForm = styled.form.attrs({
  onSubmit: (props) => props.onSubmit
})`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  width: 100%;
`;

export const SearchLabel = styled.label`

`;

export const SearchInput = styled.input`
  padding: 0.5em;
  width: 100%;
  max-width: 25rem;
  font-size: 1.25em;
`;

export const SearchSubmit = styled.input.attrs({
  type: "submit",
  value: "Submit"
})`

`;