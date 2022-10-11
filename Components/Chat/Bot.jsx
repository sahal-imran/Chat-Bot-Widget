import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ClearIcon from "@mui/icons-material/Clear";
import Image from "next/image";
import Fade from "react-reveal/Fade";

function Bot() {
  // State to show bot
  const [Show_Bot, Set_Bot] = useState(false);
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: "#A9A6A6",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Ask us Button */}
      <Button
        onClick={() => Set_Bot(!Show_Bot)}
        variant="contained"
        sx={{
          position: "fixed",
          right: "30px",
          bottom: "24px",
          background: "#9A4A4D",
          color: "white",
          p: 0,
          width: "260px",
          height: "65px",
          boxShadow:
            "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 6px 14px rgba(0, 0, 0, 0.07)",
          borderRadius: "45px",
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          overflow: "hidden",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "#9A4A4D",
          },
        }}
        className={Show_Bot ? "Show-Bot" : ""}
      >
        <Box
          sx={
            Show_Bot
              ? {
                  display: "none",
                }
              : {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center",
                  width: "100%",
                }
          }
        >
          {/* Icon */}
          <Box
            sx={{
              position: "relative",
              width: "40px",
              height: "40px",
              mr: 1,
              mt: 0.8,
            }}
          >
            <Image
              alt=""
              src={"/Assets/Chat-start-icon.svg"}
              layout="fill"
              objectFit="contain"
            />
          </Box>
          {/* Text */}
          <Typography
            sx={{
              fontFamily: "",
              fontSize: "37px",
              lineHeight: "48px",
              fontWeight: 600,
              fontStyle: "normal",
              textTransform: "capitalize",
              color: "#FFFFFF",
            }}
          >
            Ask us !
          </Typography>
        </Box>
        <Box
          sx={
            Show_Bot
              ? {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center",
                }
              : { display: "none" }
          }
        >
          <ClearIcon sx={{ color: "#A9A6A6", fontSize: "30px" }} />
        </Box>
      </Button>
    </Box>
  );
}

export default Bot;
