import logo from './logo.svg';
import './App.css';
import {ParentStyledDiv} from './Styles';
import styled from 'styled-components'
import Form from './Form';

function App() {

const mainBody = document.querySelector("body")
mainBody.style.background = " #edeedf "

  return (
    <>
    <ParentStyledDiv>
      <div id="mainHeading">
        <h1>Welcome to Form Laboratories Inc.</h1>
        <span></span>
        <p>Here - all your form/data input related dreams will come to life!</p>
      </div>
    </ParentStyledDiv>
    <ParentStyledDiv>
      <Form />
    </ParentStyledDiv>
    </>
  );
}

export default App;
