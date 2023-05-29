import { Container, IconButton, InputBase, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardComponent from "./cardComponent";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
const CardsContainer = () => {
  const [UserDetails, setUserDetails] = useState();
  const [query, setQuery] = useState("");

  const dataFetch = async () => {
    await axios.get(`https://dummyjson.com/users`).then((res) => {
      setUserDetails(res.data.users);
    });
  };

  useEffect(() => {
    dataFetch();
  }, []);

  const search = (data: any) => {
    return data?.filter(
      (item: any) =>
        item?.firstName.toLowerCase()?.includes(query) ||
        item?.lastName.toLowerCase()?.includes(query) ||
        item?.email.toLowerCase()?.includes(query)
    );
  };

  return (
    <Container>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          marginBottom: "10px",
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Users"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <IconButton
          color="primary"
          sx={{ p: "10px" }}
          aria-label="directions"
        ></IconButton>
      </Paper>
      <CardComponent data={search(UserDetails)} />
    </Container>
  );
};

export default CardsContainer;
