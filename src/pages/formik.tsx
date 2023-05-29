import React from "react";
import ReactDOM from "react-dom";
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  FieldArray,
  useFormik,
} from "formik";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  TextField,
  Button,
} from "@mui/material";
import FormDialog from "../../components/DialogForm";

const initialValues = {
  Users: [
    {
      name: "",
      phno: 0,
    },
  ],
};

const WithMaterialUI = () => {
  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default WithMaterialUI;

{
  /* <Card
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
</Card> */
}
