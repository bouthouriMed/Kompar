import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { Link } from "react-router-dom";

import { login } from "../../actions/auth";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({email, password}));
  };

  return (
    <div className="login-page">
      <Container maxWidth="xs" fixed className="container">
        <TextField
          label="Email"
          name="email"
          placeholder="Jhondoe@gmail.com"
          type="email"
          variant="outlined"
          color="secondary"
          value={email}
          fullWidth
          onChange={handleChange}
        />

        <br />
        <br />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          color="secondary"
          value={password}
          fullWidth
          onChange={handleChange}
        />

        <br />
        <br />

        <Button variant="contained" color="secondary" onClick={handleSubmit}>
          Login
        </Button>

        <h5>
          {" "}
          Don't have an account yet ? <Link to="/register">Sign up </Link>
        </h5>
      </Container>
    </div>
  );
};

export default Login;
