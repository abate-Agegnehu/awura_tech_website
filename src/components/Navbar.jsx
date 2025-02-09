import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  List,
  ListItem,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../images/image.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleCloseDrawer = () => setMobileOpen(false);

const handleScrollToSection = (id) => {
  if (window.location.pathname !== "/") {
    navigate("/"); 
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); 
  } else {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  setMobileOpen(false); 
};

  const menuItems = [
    { text: "Home", id: "home" },
    { text: "Services", id: "services" },
    { text: "Products", id: "products" },
    { text: "Clients", id: "clients" },
    { text: "Vacancy", path: "/vacancy" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          justifyContent: "center",
          backgroundColor: "#ffffff",
          paddingX: 2,
          boxShadow: "none",
          height: "120px",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box component="img" src={logo} alt="Logo" sx={{ height: 100 }} />

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {menuItems.map((item, index) =>
              item.path ? (
                <Typography
                  key={index}
                  variant="h6"
                  onClick={() => navigate(item.path)}
                  sx={{
                    textDecoration: "none",
                    color: "#01204E",
                    cursor: "pointer",
                    "&:hover": { color: "#F8B400" },
                  }}
                >
                  {item.text}
                </Typography>
              ) : (
                <Typography
                  key={index}
                  variant="h6"
                  onClick={() => handleScrollToSection(item.id)}
                  sx={{
                    textDecoration: "none",
                    color: "#01204E",
                    cursor: "pointer",
                    "&:hover": { color: "#F8B400" },
                  }}
                >
                  {item.text}
                </Typography>
              )
            )}
          </Box>

          <IconButton
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon sx={{ color: "#01204E" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={mobileOpen} onClose={handleCloseDrawer}>
        <Box sx={{ width: 200, padding: 2 }}>
          <IconButton onClick={handleCloseDrawer}>
            <CloseIcon />
          </IconButton>
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                component="button"
                key={index}
                onClick={() =>
                  item.path === "/vacancy"
                    ? navigate(item.path)
                    : handleScrollToSection(item.id)
                }
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#01204E", fontWeight: "bold" }}
                >
                  {item.text}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
