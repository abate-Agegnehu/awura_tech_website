import React from "react";
import { Box, Typography } from "@mui/material";
import at from "../images/@.png";
import africa from "../images/africa.png";
import ajt from "../images/ajt.png";
import coexist from "../images/coexist.png";
import communication from "../images/communication.png";
import convene from "../images/convene.png";
import dct from "../images/dct.png";
import dires from "../images/dires.png";
import ethioyoth from "../images/ethioyouth.png";
import eyea from "../images/eyea.png";
import eykis from "../images/eykis.png";
import flawees from "../images/flawees.png";
import flower from "../images/flower.png";
import gugut from "../images/gugut.png";
import ipdc from "../images/IPDC.png";
import lewis from "../images/lewis.png";
import oroturism from "../images/oroturism.png";
import pbs from "../images/pbs.png";
import priees from "../images/priees.png";
import seat from "../images/seat.png";
// Clients logos
const clients = [
  { image: at },
  { image: africa },
  { image: ajt },
  { image: coexist },
  { image: communication },
  { image: convene },
  { image: dct },
  { image: dires },
  { image: ethioyoth },
  { image: eyea },
  { image: eykis },
  { image: flawees },
  { image: flower },
  { image: gugut },
  { image: ipdc },
  { image: lewis },
  { image: oroturism },
  { image: pbs },
  { image: priees },
  { image: seat },
];

const Clients = () => {
  return (
    <Box id="clients" sx={{ width: "100%", textAlign: "center", py: 5 }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", color: "#01204E", mb: 2 }}
      >
        Clients
      </Typography>

      <Box sx={{ justifyContent: "center", display: "flex" }}>
        <Typography sx={{ color: "#555", mb: 4, width: "60%" }}>
          We are proud to serve a wide range of clients across multiple
          industries. Our customer base includes leading enterprises, dynamic
          small businesses, and innovative start-ups. We are committed to
          delivering tailored solutions that exceed the expectations of every
          client we work with.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            animation: "scroll-left 60s linear infinite",
          }}
        >
          {clients.map((client, index) => (
            <Box
              key={index}
              sx={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                backgroundColor: "#fff",
                margin: "0 15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                overflow: "hidden",
              }}
            >
              <img
                src={client.image}
                alt={`Client ${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <style>
        {`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-60%); }
          }
        `}
      </style>
    </Box>
  );
};

export default Clients;
