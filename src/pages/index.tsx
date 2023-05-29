// pages/index.tsx

import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardsContainer from "../../components/cardsContainer";
import { useState } from "react";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#05386B",
        }}
      >
        <h1 style={{ color: "#fff" }}>Users</h1>
        <CardsContainer />
      </Box>
    </Container>
  );
};

export default Home;
