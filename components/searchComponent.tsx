import React from "react";
import { Paper, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchComponent = () => {
  function setQuery(value: string) {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
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
    </div>
  );
};

export default SearchComponent;
