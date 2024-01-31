import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Spin } from "antd";
import {
  Container,
  Paper,
  TextField,
  FormControlLabel,
  FormControl,
  Button,
  Select,
  MenuItem,
  FormGroup,
  Checkbox,
  InputLabel,
} from "@mui/material";

import axios from "axios";
// import Header from "./Header";
// import Footer from "./Footer";
const FormComponent = () => {
  const [formData, setFormData] = useState({
    subject:"",
    email: "",
    name: "",
    degree: "",
    link:"",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Handle checkbox separately
    if (type === "checkbox") {
      const updatedPreferences = checked
        ? [...formData.destinationPreferences, name]
        : formData.destinationPreferences.filter((pref) => pref !== name);
      setFormData({ ...formData, destinationPreferences: updatedPreferences });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    const formData = new FormData();
    console.log(formData);
    // const { data } = await axios.post(
    //   // "https://ligmr-form-admission.onrender.com/api/forms/applyForm",
    //   "http://localhost:5001/api/forms/applyForm",
    //   formData
    // );
    // if (data.success) {
    //   toast.success("Form submitted successfully");
    //   setFormData({
    //     subject:"",
    //     email: "",
    //     name: "",
    //     degree: "",
    //     link:"",
    //   });
    // } else {
    //   toast.error(data.error);
    // }
    setLoading(false);
  };

  return (
    <div className="items-center justify-center">
      <Container maxWidth="md" className="m-3  ">
        <Toaster />
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            marginTop: "20px",
          }}
          className="shadow-lg"
        >
          <h1 className="font-semibold text-3xl text-orange-500 text-center m-5">
            Application Form
          </h1>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2 items-center">
                <TextField
                  label="Subject"
                  name="subject"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <TextField
                  label="Name"
                  name="name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2 items-center">
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                 <TextField
                  label="Link"
                  name="link"
                  type="link"
                  fullWidth
                  margin="link"
                  variant="outlined"
                  value={formData.link}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="userType">Degree *</InputLabel>
                <Select
                  label="You are *"
                  value={formData.degree}
                  onChange={handleChange}
                  inputProps={{
                    name: "degree",
                    id: "degree",
                  }}
                  required
                >
                  <MenuItem value="Parent">BBA</MenuItem>
                  <MenuItem value="Student">MBA</MenuItem>
                  <MenuItem value="Student">BTS</MenuItem>
                </Select>
              </FormControl>
            </div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "20px", padding: "10px" }}
              disabled={loading}
            >
              {/* Submit */}
              {loading ? (
                <div className="flex justify-center items-center">
                  <Spin size="large" spinning={loading} />
                </div>
              ) : (
                "Apply Now"
              )}
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default FormComponent;
