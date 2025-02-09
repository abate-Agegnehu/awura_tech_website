import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import BusinessIcon from "@mui/icons-material/Business";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SupportIcon from "@mui/icons-material/Support";
import StorageIcon from "@mui/icons-material/Storage";
import LanIcon from "@mui/icons-material/Lan";

const services = [
  {
    icon: <CodeIcon sx={{ fontSize: 40, color: "#01204E" }} />,
    title: "Software Product Development",
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 40, color: "#01204E" }} />,
    title: "ERP Systems",
  },
  {
    icon: <LanIcon sx={{ fontSize: 40, color: "#01204E" }} />,
    title: "Intelligent Infrastructure Solution",
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 40, color: "#01204E" }} />,
    title: "In-House Products",
  },
  {
    icon: <StorageIcon sx={{ fontSize: 40, color: "#01204E" }} />,
    title: "Technology Consultancy",
  },
  {
    icon: <SupportIcon sx={{ fontSize: 40, color: "#01204E" }} />,
    title: "Support and Troubleshooting",
  },
];

const Services = () => {
  return (
    <Box sx={{ width: "100%", textAlign: "center", py: 5 }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", color: "#01204E", mb: 2 }}
      >
        Our Services
      </Typography>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Typography sx={{ color: "#555", mb: 4, width: "60%" }}>
          Our company helps clients grow and succeed through a range of services
          including custom software development, ERP systems, intelligent
          infrastructure solution, technology consultancy, in-house solutions,
          and testing.
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                p: 3,
                textAlign: "center",
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": { boxShadow: 6, transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                {service.icon}
                <Typography
                  variant="h6"
                  sx={{ mt: 2, fontWeight: "bold", color: "#01204E" }}
                >
                  {service.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
