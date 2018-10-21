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
  padding: 0.5em 2em 2em 2em;
  box-shadow: 1px 1px 3px 1px var(--gray);
  border-radius: 1px;
`;

export const Flex = styled.div`
  display: flex;
  flex-flow: ${props => props.direction || 'row'} ${props => props.wrap || 'nowrap'};
`;

export const Row = styled(Flex).attrs({
  direction: 'row',
  wrap: props => props.wrap || 'nowrap'
})`
  align-items: center;
  width: 100%;
`;

export const Column = styled(Flex).attrs({
  direction: 'column',
  wrap: props => props.wrap || 'nowrap'
})`
  align-items: ${props => props.columnAlign || 'flex-start'}
`;

export const WrapRow = styled(Row).attrs({wrap: 'wrap'})``;
export const WrapColumn = styled(Column).attrs({wrap: 'wrap'})``;

export const Submit = styled.input.attrs({
  type: "submit",
  value: "Submit"
})``;

export const PageTitle = styled.h2`
  color: #000;
`;

export const MakeButton = (type, inputType) => styled(type).attrs({
  type: inputType
})`
  display: inline-block;
  background: var(--primary);
  color: #fff;
  font-weight: bold;
  border: 0px solid var(--gray);
  cursor: pointer;
  padding: 0.5em 0.75em;
  font-size: 1.25em;
  margin: 0 0.3em;
  line-height: 1em;
  text-decoration: none;
  ${props => props.round ? 'border-radius: 0.5rem;' : ''}
  &:hover {
    background: var(--primary);
  }
`;

export const SubmitButton = MakeButton(Submit);