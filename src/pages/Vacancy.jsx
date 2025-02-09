import { Grade, Security, Work } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  Typography,
  Container,
} from "@mui/material";
import React from "react";
import backimage from "../images/backimage.png";
import UpdateIcon from "@mui/icons-material/Update";
import SchoolIcon from "@mui/icons-material/School";

const primaryColor = "#01204E"; // Define the primary color

const Vacancy = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          backgroundImage: `url(${backimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          py: 12,
          color: "white",
        }}
      >
        <Container>
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#fff" }}
          >
            JOIN US
          </Typography>
          <Typography sx={{ maxWidth: "600px", margin: "auto", mb: 3 }}>
            Are you passionate about making a difference? Join our dynamic team
            and be part of a collaborative and innovative environment where your
            ideas matter.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: primaryColor,
              "&:hover": { backgroundColor: "#011635" },
            }}
            onClick={() => {
              document
                .getElementById("footer")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            JOIN THE TEAM
          </Button>
        </Container>
      </Box>

      {/* Why Join Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ fontSize: "38px", color: primaryColor }}
            >
              Why You Should Join Our Awesome Team
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We want you to feel at home when working with us. We offer
              training and a great set of benefits tailored for you!
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {[
                {
                  icon: <Work sx={{ color: primaryColor }} />,
                  title: "Team Work",
                  desc: "At our company, teamwork is at the heart of everything we do. We believe in the power of collaboration and communication, working together to achieve our goals and drive innovation.",
                },
                {
                  icon: <Security sx={{ color: primaryColor }} />,
                  title: "Secured Future",
                  desc: "We are committed to ensuring a secure and stable future for all our employees. Our comprehensive benefits package includes competitive salaries, health and wellness programs, and retirement plans.",
                },
                {
                  icon: <SchoolIcon sx={{ color: primaryColor }} />,
                  title: "Learning Opportunity",
                  desc: "We foster a culture of continuous learning and professional development. We provide ample opportunities for skill enhancement, training programs, and career growth to help you reach your full potential.",
                },
                {
                  icon: <UpdateIcon sx={{ color: primaryColor }} />,
                  title: "Timely Updates",
                  desc: "Staying informed and up-to-date is key to our success. We prioritize regular updates and communication to keep everyone aligned, ensuring that you have the latest information and resources at your fingertips.",
                },
              ].map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    sx={{
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      borderLeft: `4px solid ${primaryColor}`,
                    }}
                  >
                    {/* Icon and Title in one line */}
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      {item.icon}
                      <Typography
                        fontWeight="bold"
                        variant="h6"
                        sx={{ ml: 1, color: primaryColor }}
                      >
                        {item.title}
                      </Typography>
                    </Box>

                    {/* Description Below */}
                    <Typography variant="body2" color="text.secondary">
                      {item.desc}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ my: 5 }} />

      {/* Career Openings Section */}
      <Container sx={{ textAlign: "center", py: 5 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ color: primaryColor }}
        >
          Career Openings
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ maxWidth: "600px", margin: "auto" }}
        >
          We're always looking for creative, talented individuals to join our
          team. Explore our open roles below.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            mt: 4,
            flexDirection: "row",
          }}
        >
          <Card
            sx={{
              p: 3,
              width: "300px",
              textAlign: "center",
              borderBottom: `4px solid ${primaryColor}`,
            }}
          >
            <Typography fontWeight="bold" sx={{ color: primaryColor }}>
              CATEGORIES
            </Typography>
            <Typography color={primaryColor} sx={{ mt: 1 }}>
              All
            </Typography>
          </Card>
          <Typography color="text.secondary" sx={{ mt: 2 }}>
            No positions available at this moment.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Vacancy;
