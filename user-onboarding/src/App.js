import logo from './logo.svg';
import './App.css';
import {StyledDiv} from './Styles';
import styled from 'styled-components'
import Form from './Form';

const Seed = styled.div`
color: red;
`

function App() {


  return (
    <>
    <StyledDiv>
      <h1>Feet-za</h1>
    </StyledDiv>
    <StyledDiv>
      <Form />
    </StyledDiv>
    </>
  );
}

export default App;
