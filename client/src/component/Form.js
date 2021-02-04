import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardHeader,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { addForm } from "../actions/form";
import { Fragment } from "react";

import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  outlined: {
    width: "100%",
    margin: "10px",
  },
  card: {
    minWidth: 275,
    margin: "50px",
    padding: "50px",
  },
  title: {
    textAlign: "center",
    fontSize: "100px",
  },
}));

export default function Form({ history }) {
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
    type,
    label,
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

  const dispatch = useDispatch();

  const [alignment, setAlignment] = useState("left");
  const [formats, setFormats] = React.useState(() => ["phone"]);

  const handleFormat = (event, newFormats) => {
    if (newFormats.length) {
      setFormats(newFormats);
    }
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addForm(formData, history));
  };

  const classes = useStyles();

  return (
    <Fragment>
      <Container maxWidth="ls" style={{marginTop:"50px"}}>
        <Card className={classes.card}>
          <CardHeader title="Coordonées" className={classes.title} />
          <Paper className={classes.outlined} variant="outlined">
            <Typography align="center">
              Quel offre souhaitez vous souscrire ?
            </Typography>
          </Paper>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <div className={classes.toggleContainer}>
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <ToggleButton value="left" aria-label="left aligned">
                    <Typography>Electricté / Gaz</Typography>
                  </ToggleButton>
                  <ToggleButton value="center" aria-label="centered">
                    <Typography>Electricté </Typography>
                  </ToggleButton>
                  <ToggleButton value="right" aria-label="right aligned">
                    <Typography>Gaz</Typography>
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
            </Grid>
            <Grid item sm={12} md={6}>
              <div className={classes.toggleContainer}>
                <ToggleButtonGroup
                  value={formats}
                  onChange={handleFormat}
                  aria-label="device"
                >
                  <ToggleButton value="laptop" aria-label="laptop">
                    <Typography>Green</Typography>
                  </ToggleButton>
                  <ToggleButton value="tv" aria-label="tv">
                    <Typography>Eco</Typography>
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
            </Grid>
          </Grid>
        </Card>
      </Container>

      <form className={classes.root} noValidate autoComplete="off">
        <Container maxWidth="ls" fixed className="container">
          <Card className={classes.card}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <TextField
                    id="outlined-required"
                    label="Nom et Prenom"
                    variant="outlined"
                    name="fullName"
                    value={fullName}
                    onChange={handleChange}
                  />
                  <TextField
                    id="outlined-disabled"
                    label="Adresse"
                    variant="outlined"
                    name="adress"
                    value={adress}
                    onChange={handleChange}
                  />
                  <TextField
                    id="outlined-password-input"
                    label="Télephone"
                    type="text"
                    variant="outlined"
                    name="poneNumber"
                    value={poneNumber}
                    onChange={handleChange}
                  />
                  <TextField
                    id="outlined-read-only-input"
                    label="Ville"
                    variant="outlined"
                    name="city"
                    value={city}
                    onChange={handleChange}
                  />
                  <TextField
                    id="outlined-number"
                    label="Code Postal"
                    type="text"
                    variant="outlined"
                    name="postalCode"
                    value={postalCode}
                    onChange={handleChange}
                  />
                  <TextField
                    id="outlined-number"
                    label="Email"
                    type="text"
                    variant="outlined"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <TextField
                    id="outlined-required"
                    label="Mensualité actuelle"
                    variant="outlined"
                    name="monthlyPayment"
                    value={monthlyPayment}
                    onChange={handleChange}
                  />
                  <TextField
                    id="outlined-disabled"
                    label="Mensualité à Negocier"
                    variant="outlined"
                    name="negothiablePayment"
                    value={negothiablePayment}
                    onChange={handleChange}
                  />
                  <TextField
                    id="outlined-password-input"
                    label="PDL"
                    type="text"
                    variant="outlined"
                    name="pdl"
                    value={pdl}
                    onChange={handleChange}
                  />
                  <TextField
                    id="outlined-read-only-input"
                    label="PCE"
                    variant="outlined"
                    name="pce"
                    value={pce}
                    onChange={handleChange}
                  />

                  <TextField
                    id="outlined-search"
                    label="Estimation de la consomation"
                    type="text"
                    variant="outlined"
                    name="consomEstimation"
                    value={consomEstimation}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  size="medium"
                  fullWidth={false}
                >
                  Envoyer + Voir l'offre
                </Button>
           
            </div>
          </Card>
        </Container>
      </form>
    </Fragment>
  );
}
