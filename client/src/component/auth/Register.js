import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { Link } from "react-router-dom";

import { register } from "../../actions/auth";

const Login = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password1: "",
    password2: "",
  });

  const dispatch = useDispatch()

  const { firstname, lastname, email, password1, password2 } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = e => {
  e.preventDefault();

  if(password1!==password2) {
     alert('Please enter the same password')
  }

  dispatch(register({firstname, lastname, email, password: password1}))

}

  return (
    <div className="login-page">
      <Container maxWidth="xs" fixed className="container">
        <TextField
          label="First Name"
          name="firstname"
          placeholder="Jhon"
          variant="outlined"
          color="primary"
          value={firstname}
          fullWidth
          onChange={handleChange}
        />
        <br />
        <br />

        <TextField
          label="Last Name"
          name="lastname"
          placeholder="Doe"
          variant="outlined"
          color="primary"
          value={lastname}
          fullWidth
          onChange={handleChange}
        />
        <br />
        <br />

        <TextField
          label="Email"
          name="email"
          placeholder="Jhondoe@gmail.com"
          type="email"
          variant="outlined"
          color="primary"
          value={email}
          fullWidth
          onChange={handleChange}
        />

        <br />
        <br />
        <TextField
          label="Password"
          name="password1"
          type="password"
          variant="outlined"
          color="primary"
          value={password1}
          fullWidth
          onChange={handleChange}
        />

        <br />
        <br />
        <TextField
          label="Confirm Password"
          name="password2"
          type="password"
          variant="outlined"
          color="primary"
          value={password2}
          fullWidth
          onChange={handleChange}
        />

        <br />
        <br />

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Sign up
        </Button>

        <h5>
          {" "}
          Already a member ? <Link to="/login">Login</Link>
        </h5>
      </Container>
    </div>
  );
};

export default Login;
