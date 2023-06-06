import * as React from "react";
import { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ticketQuantity, setTicketQuantity] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Ticket Quantity:", ticketQuantity);
    setName("");
    setEmail("");
    setTicketQuantity("");
  };

  return (
    <div className=" bg-slate-300 p-10 mt-24 mb-11 gap-36">
      <h1 className="text-4xl text-center mb-10 text-gray-900 uppercase font-bold tracking-wider">
        {localStorage.getItem("movie")}
      </h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              value={name}
              color="primary"
              onChange={(e: any) => setName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Ticket Quantity"
              value={ticketQuantity}
              onChange={(e: any) => setTicketQuantity(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Book Ticket
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
