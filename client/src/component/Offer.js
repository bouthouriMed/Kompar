import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, CardHeader, CardMedia, Container } from "@material-ui/core";
import { getOfferById } from "../actions/form";

import EcoElec from "./layouts/EcoElec";
import EcoGreenElec from "./layouts/EcoGreenElec";
import GazEco from "./layouts/GazEco";
import Calculator from "./layouts/Calculator";
import Footer from "./layouts/Footer";

import icon1 from "../img/icon1.png";
import icon4 from "../img/icon4.png";
import icon5 from "../img/icon5.png";
import icon2 from "../img/icon2.png";
import offre1 from "../img/offre1.jpg";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "50px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  media: {
    height: 1,
    paddingTop: "50.20%", // 16:9
    maxWidth: 456,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Offer({ match }) {
  const [formData, setFormData] = useState({
    type: "",
    label: "",
    fullName: "",
    monthlyPayment: "",
    adress: "",
    negothiablePayment: "",
    poneNumber: "",
    pdl: "",
    city: "",
    pce: "",
    postalCode: "",
    email: "",
    consomEstimation: "",
  });

  const {
    fullName,
    monthlyPayment,
    adress,
    negothiablePayment,
    poneNumber,
    pdl,
    city,
    pce,
    postalCode,
    email,
    consomEstimation,
  } = formData;

  const classes = useStyles();

  const form = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  console.log(match.params.id);

  useEffect(() => {
    if (!form) {
      dispatch(getOfferById(match.params.id));
    }
    console.log(form);
  }, [form]);

  return (
    form && (
      <Fragment>
        <Container maxWidth="l" fixed>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.pos}
                variant="h5"
                color="textSecondary"
                gutterBottom
              >
                1.Cooronnées
              </Typography>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <Typography className={classes.pos} color="textSecondary">
                    Nom et Prénom: <span>{form && form.fullName}</span>
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Code postal: <span>{form && form.postalCode}</span>
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Email: <span>{form && form.email}</span>
                  </Typography>
                </div>
                <div>
                  <Typography className={classes.pos} color="textSecondary">
                    Adresse: <span>{form && form.adress}</span>
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Ville: <span>{form && form.city}</span>
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Télephone: <span>{form && form.poneNumber}</span>
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
          <hr />
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.pos}
                variant="h5"
                color="textSecondary"
                gutterBottom
              >
                2.Votre projet
              </Typography>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <Typography className={classes.pos} color="textSecondary">
                    Vous changez de fournisseur: <span></span>
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Votre logement situé à: <span>{form && form.city}</span>
                  </Typography>
                </div>
                <div>
                  <Typography className={classes.pos} color="textSecondary">
                    PDL: <span>{form && form.pdl}</span>
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    PCE: <span>{form && form.pce}</span>
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>

          <hr />
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.pos}
                variant="h5"
                color="textSecondary"
                gutterBottom
              >
                3.Consommation
              </Typography>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <Typography className={classes.pos} color="textSecondary">
                    Estimation de la consomation actuelle:{" "}
                    <span>{form && form.consomEstimation}</span>
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Mensualité négociée:{" "}
                    <span>{form && form.negothiablePayment}</span>
                  </Typography>
                </div>
                <div>
                  <Typography className={classes.pos} color="textSecondary">
                    Mensualité actuelle:{" "}
                    <span>{form && form.monthlyPayment}</span>
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Economie actuelle:{" "}
                    <span>{`${
                      (form.monthlyPayment - form.negothiablePayment) * 12
                    }`}</span>
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
          <hr />
          <Card>
            <CardContent>
              <Typography
                className={classes.pos}
                variant="h5"
                color="textSecondary"
                gutterBottom
              >
                4.Offre et Budget
              </Typography>
              <div>
                <Box width="20%" height="20%">
                  <CardMedia className={classes.media} image={offre1} />
                </Box>
                <Container maxWidth="md">
                  <EcoElec />
                </Container>
              </div>
              <br />
              <Container maxWidth="md">
                <EcoGreenElec />
              </Container>
              <br />
              <Container maxWidth="md">
                <GazEco />
              </Container>
              <br />
              <Container maxWidth="md">
                <GazEco />
              </Container>
              <br />
              <Calculator form={form} />
            </CardContent>
            <br />
          </Card>
        </Container>
        <br />
        <Container maxWidth="xl">
          <Card className={classes.root}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                padding: "50px",
              }}
            >
              <Box width="30%" height="30%">
                <CardMedia className={classes.media} image={icon1} />
              </Box>
              <Box width="30%" height="30%">
                <CardMedia className={classes.media} image={icon4} />
              </Box>
              <Box width="30%" height="30%">
                <CardMedia className={classes.media} image={icon5} />
              </Box>
              <Box width="30%" height="30%">
                <CardMedia className={classes.media} image={icon2} />
              </Box>
            </div>
          </Card>
        </Container>
        <Footer />
      </Fragment>
    )
  );
}
