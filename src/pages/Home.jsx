import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import homebanner from "../images/bannerhome.png";
import Services from "../components/Services";
import Products from "../components/Products";
import Clients from "../components/Clients";

const Home = () => {
  return (
    <>
      <Box
        id="home"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minHeight: "100vh",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            padding: { xs: "10px", md: "20px" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              color: "#01204E",
            }}
          >
            Every problem is an opportunity for a solution
          </Typography>
          <Typography
            sx={{
              fontSize: 22,
              marginTop: "40px",
            }}
          >
            Awura is a tech company that is focused on finding tech solutions
            based on innovation and creativity.
          </Typography>
          <Divider
            sx={{
              backgroundColor: "white",
              margin: { md: "50px 200px 10px 0px", xs: "40px 10px 0px 0px " },
            }}
          />
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={homebanner}
            alt="Home Banner"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
      <Box id="services">
        <Services />
      </Box>
      <Box id="products">
        <Products />
      </Box>
      <Box>
        <Clients id="clients" />
      </Box>
    </>
  );
};

export default Home;
