import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormDialog from "./DialogForm";

const CardComponent = (data: any) => {
  return data?.data?.map((user: any) => {
    return (
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#5cdb95",
          marginBottom: "20px",
          borderRadius: "15px",
        }}
        key={user.id}
      >
        <div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              FirstName : {user.firstName}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              LastName : {user.lastName}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Email : {user.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Gender : {user.gender}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Age : {user.age}
            </Typography>
          </CardContent>
          <CardActions>
            <FormDialog />
          </CardActions>
        </div>
        <div>
          <img
            alt="Avatar"
            src={user.image}
            style={{ width: 86, height: 86 }}
          />
        </div>
      </Card>
    );
  });
};

export default CardComponent;
