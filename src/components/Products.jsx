import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import meklit from "../images/meklit.png";
import saa from "../images/Saa.png";
import labex from "../images/labex.png";
import getway from "../images/getway.png";

const products = [
  {
    title: "Discover OwlEvents",
    description:
      "OwlEvents is a digital platform designed to streamline the process of planning, managing, and coordinating events of various types and sizes.",
    link: "https://owlevents.app/",
    image: getway,
  },
  {
    title: "Discover LabExAfrica",
    description:
      "LabExAfrica is a project we did to streamline the process of laboratory management and scientific research.",
    link: "https://portal.labexafrica.com/",
    image: labex,
  },
  {
    title: "Discover MFS",
    description:
      "MFS is a digital platform designed to streamline the process of agricultural management and coordination.",
    link: "https://maed.farm/auth/login",
    image: saa,
  },
  {
    title: "Discover Meklit",
    description:
      "Meklit is a digital platform designed to streamline various health conditions regarding women and children.",
    link: "https://meklit.life/",
    image: meklit,
  },
];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 30000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ width: "100%", textAlign: "center", py: 5 }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", color: "#01204E", mb: 2 }}
      >
        Products
      </Typography>

      <Box sx={{ justifyContent: "center", display: "flex" }}>
        <Typography sx={{ color: "#555", mb: 4, width: "60%" }}>
          We offer a diverse range of high-quality products to meet the varied
          needs of our customers. Our product portfolio includes cutting-edge
          technology solutions as well as innovative consumer goods for the home
          and outdoors. Whether you're looking for enterprise software, smart
          home devices, or stylish outdoor gear, you'll find it all under one
          roof with Awura.
        </Typography>
      </Box>

      {/* Product Display */}
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left Content */}
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "#01204E" }}
          >
            {products[currentIndex].title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "#555", my: 2, textAlign: "left", width: "65%" }}
            >
              {products[currentIndex].description}
            </Typography>
          </Box>
          <Button
            variant="contained"
            href={products[currentIndex].link}
            target="_blank"
            sx={{
              backgroundColor: "#01204E",
              "&:hover": { backgroundColor: "#011A3E" },
            }}
          >
            Go to website
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={products[currentIndex].image}
            alt={products[currentIndex].title}
            style={{
              width: "100%",
              height: "300px", 
              objectFit: "contain", 
              borderRadius: 8,
            }}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        {products.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              objectFit: "cover",
              backgroundColor: currentIndex === index ? "#01204E" : "#bbb",
              margin: "0 5px",
              cursor: "pointer",
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Products;
