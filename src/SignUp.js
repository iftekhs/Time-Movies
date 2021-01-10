import { Button } from '@material-ui/core';
import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <div className="SignUp">
      <div className="signUp__form">
        <input placeholder="Your Email" />
        <input placeholder="Your Password" />
        <input placeholder="Confirm Password" />
        <Button> SignUp </Button>
        <Button className="google__button"> or Sign Up with Google </Button>
      </div>
    </div>
  );
}

export default SignUp;
