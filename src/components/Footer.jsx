import React from "react";
import {
  Box,
  IconButton,
  Typography,
  Link,
  Container,
  Divider,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        backgroundColor: "#011635",
        color: "white",
        paddingY: 3,
        marginTop: "auto",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 2 }}>
          <Link href="/" sx={linkStyle}>
            Home
          </Link>
          <Link href="/" sx={linkStyle}>
            Services
          </Link>
          <Link href="/" sx={linkStyle}>
            Products
          </Link>
          <Link href="/" sx={linkStyle}>
            Clients
          </Link>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
          <Divider sx={{ backgroundColor: "white", width: "60%" }} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
          <IconButton
            component="a"
            href="https://www.instagram.com/awura_et"
            target="_blank"
            sx={iconStyle}
          >
            <Instagram />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.facebook.com/profile.php?id=100092874956734"
            target="_blank"
            sx={iconStyle}
          >
            <Facebook />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/company/awura/"
            target="_blank"
            sx={iconStyle}
          >
            <LinkedIn />
          </IconButton>
        </Box>

        {/* Copyright */}
        <Typography variant="body2">
          © {new Date().getFullYear()} Awura. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  "&:hover": { textDecoration: "underline", color: "#F8B400" },
};

const iconStyle = {
  color: "white",
  "&:hover": { color: "#F8B400" },
};

export default Footer;
