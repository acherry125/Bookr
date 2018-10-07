import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  color: #000;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Main = styled.main`
  padding: 1.25em;
  background: var(--blue-gray);
  min-height: 100vh;
  @media only screen and (min-width: 60em) {
    padding: 4em;
  }
`;

export const Content = styled.section`
  background: var(--white);
  padding: 2em 2em;
  box-shadow: 1px 1px 3px 1px var(--gray);
  border-radius: 1px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;

export const SearchTitle = styled.h2`
  color: #000;
  align-self: flex-start;
`;

export const SearchInnerWrapper = styled.div`
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
  font-size: 2em;
`;