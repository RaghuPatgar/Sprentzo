import React, { useState } from 'react';
import '../login-form/index.css';
import SignupSocialimage from '../signup-social/index';

function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-form-container">

      {/* <form onSubmit={handleSubmit}> */}
      
      <div>
        <div className="login-form-email">E-mail ID</div>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <div className="login-form-password">Password</div>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Sign Up</button>
      {/* </form> */}
      
      <SignupSocialimage />
    </div>
  );
}

export default LogInForm;
