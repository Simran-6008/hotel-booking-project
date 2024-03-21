import Header from "./Header";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../CSS/bookingPage.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  //console.log(location.state);
  const hotelList = location.state.hotelList;
  const hotelId = location.state.hotelId;

  console.log(hotelId);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    room: "",
    checkin: "",
    checkout: "",
  });
  const handleChange = (event) => {
    let { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleReserve = (event) => {
    //console.log(formData);
    event.preventDefault();
    const form = event.target;
    console.log("valid");
    if (form.checkValidity()) {
      let updatedData = {};
      hotelList.forEach((element) => {
        if (element.id === hotelId) {
          element.Availability -= formData.room;
          updatedData = { ...element };
        }
      });
      console.log(updatedData);
      fetch(`http://localhost:3001/data/${parseInt(hotelId)}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      navigate("/lastPage", { state: formData });
    }
  };

  return (
    <div>
      <Header />
      <Box
        sx={{ alignSelf: "center", display: "flex", justifyContent: "center" }}
      >
        <ImageList sx={{ width: 500, height: 400 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      <div className="input-container">
        <div className="calender-box">
          <TextField
            onChange={handleChange}
            id="checkin"
            label="Check-in"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div>
          <TextField
            onChange={handleChange}
            id="checkout"
            label="Check-out"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="form-container">
          <TextField
            required
            type="text"
            id="firstName"
            label="First Name"
            onChange={handleChange}
          />
          <TextField
            type="text"
            id="lastName"
            label="Last Name"
            onChange={handleChange}
          />
          <TextField
            required
            type="email"
            id="email"
            label="Email"
            onChange={handleChange}
          />
          <TextField
            required
            onChange={handleChange}
            id="phoneNumber"
            label="Phone-Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            id="room"
            onChange={handleChange}
            label="Selected-Room"
            type="number"
          />
        </div>
      </Box>
      <div className="button-container">
        <Stack spacing={2} direction="row">
          <Button variant="contained" type="submit" onClick={handleReserve}>
            Confirm Reservation
          </Button>
        </Stack>
      </div>
    </div>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Honey",
  },
];

export default BookingPage;
