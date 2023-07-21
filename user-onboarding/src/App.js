import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {HeadingStyledDiv, BodyStyledDiv} from './Styles';
import styled from 'styled-components'
import Form from './Form';

const initialFormValues = {
name: "",
email: "",
password: "",
terms: false,
money: ""
}

const intialErrorValues = {
  name: "",
  email: "",
  password: "",
  terms: "",
  money: ""
}

function App() {

const mainBody = document.querySelector("body")
mainBody.style.background = " #cdf3e7 "

const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(intialErrorValues)

  return (
    <>
    <HeadingStyledDiv>
      <div id="mainHeading">
        <h1>Welcome to Form Laboratories Inc.</h1>
        <span></span>
        <p>Here - all your form/data input related dreams will come to life!</p>
      </div>
    </HeadingStyledDiv>
    <HeadingStyledDiv>
      <div id="mainHeading">
        <h1>All About Us: </h1>
      <span></span>
      <p>And what you can expect.</p>
      </div>
    </HeadingStyledDiv>
    <BodyStyledDiv>
      <h1>Our Goal:</h1>
      <p>At Form Laboratories Inc., we believe that forms are the gateways to meaningful connections with your audience. Our mission is simple: to empower you with the most enchanting, seamless, and user-friendly form-building solutions out there. Whether you're a seasoned developer or a curious newcomer, we've got the potions (and by potions, we mean tools!) to conjure up the perfect forms for your needs.</p>
      <p>Convinced yet? See how you can work with us today below.</p>
    </BodyStyledDiv>
    <BodyStyledDiv>
      <h1>Lets Get Started:</h1>
      <p>In order you to fully envelope yourself with the wonders of advanced form management and to utilize our awesome library for you to do so - we're gonna need all of YOUR info first beforehand.</p>
      <p>Please create an account with us using the form below - any information that doesn't meet our standards will be automatically rejected and a pop up box will let you know what's wrong. Once everything checks out, you'll finally be able to submit.</p>
      <p>Afterwards, you'll see your information pop up the screen!</p>
      <p id="disclaimer">Please note your information showing up isn't actually a feature but a bug in our programming, it will be available for anyone to see so sorry about that.</p>
    </BodyStyledDiv>
    <>
      <Form />
    </>
    </>
  );
}

export default App;
