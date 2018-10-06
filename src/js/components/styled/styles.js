import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  text-align: center;
  color: #000;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Main = styled.main`
  padding: 4em;
  background: var(--blue-gray);
  min-height: 100vh;
`;

export const Content = styled.section`
  background: var(--off-white);
  padding: 2em 0.25em;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const SearchTitle = styled.h2`
  text-align: center;
  color: #000;
`;

export const SearchInnerWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 15em;
`;

export const SearchLabel = styled.label`
  
`;

export const SearchInput = styled.input`
  
`;