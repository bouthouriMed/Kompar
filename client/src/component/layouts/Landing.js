import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Container from "@material-ui/core/Container";

function Landing() {
  return (
    <Fragment>
      <section className="landing">
        <Container maxWidth="md" fixed>
          <div className="landing-title">
            <h1 className="x-large">CarPooling </h1>
            <p className="lead">
              Connects public transit riders to drivers headed in the same
              direction. For about the same price as public transit, passengers
              save time and enjoy a more comfortable ride, while drivers save
              some money by sharing the cost of the commute.
            </p>
          </div>

          <div className="buttons">
            <ButtonGroup variant="outlined"  size='large'>
              <Button color="primary">
                <Link to="/login">Login</Link>
              </Button>
              <Button color="secondary" >
                <Link to="/register">Register</Link>
              </Button>
            </ButtonGroup>
          </div>
        </Container>
      </section>
    </Fragment>
  );
}

export default Landing;
