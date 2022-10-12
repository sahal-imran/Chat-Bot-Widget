import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ClearIcon from "@mui/icons-material/Clear";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import SwitchButton from "../Chat-components/SwitchButton";

function Bot() {
  // State to show bot
  const [Show_Bot, Set_Bot] = useState(false);

  // Switch Views
  const [Telegram_Call, set_Telegram_Call] = useState(false);
  const [Help, set_Help] = useState(false);
  const [Calender, set_Calender] = useState(false);

  const Active_Telegram_Call = () => {
    set_Telegram_Call(true);
    set_Help(false);
    set_Calender(false);
  };
  const Active_Help = () => {
    set_Telegram_Call(false);
    set_Help(true);
    set_Calender(false);
  };
  const Active_Calender = () => {
    set_Telegram_Call(false);
    set_Help(false);
    set_Calender(true);
  };

  return (
    <Box
      sx={
        Show_Bot
          ? {
              width: "100vw",
              height: "100vh",
              background: "#A9A6A6",
              overflow: "hidden",
              position: "relative",
              transition: "all 0.3s ease",
            }
          : {
              position: "relative",
              transition: "all 0.3s ease",
            }
      }
    >
      {/* Ask us Button */}
      <Button
        onClick={() => Set_Bot(!Show_Bot)}
        variant="contained"
        sx={{
          position: "fixed",
          right: { md: "30px", xs: "15px" },
          bottom: { md: "24px", xs: "15px" },
          background: "#9A4A4D",
          color: "white",
          p: 0,
          width: { md: "260px", xs: "150px" },
          height: { md: "65px", xs: "50px" },
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
              fontFamily: "Assistant",
              fontSize: { md: "37px", xs: "24px" },
              lineHeight: "40px",
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

      {/* Main chat container */}
      <Box
        sx={
          Show_Bot
            ? {
                width: "881px",
                height: "587px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                background: "#FFFFFF",
                borderRadius: "10px",
                transition: "all 0.3s ease",
                position: "absolute",
                right: "30px",
                bottom: "100px",
                overflow: "hidden",
              }
            : {
                display: "none",
              }
        }
      >
        {/* Top Navbar */}
        <Box
          sx={{
            width: "100%",
            height: "93px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#FD8F8E",
            px: 1,
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              position: "relative",
              width: "443px",
              height: "88px",
            }}
          >
            <Image
              alt=""
              src={"/Assets/Logo.svg"}
              layout="fill"
              objectFit="contain"
            />
          </Box>

          {/* Buttons to Switch */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SwitchButton
              Current_state={Telegram_Call}
              Change_State={() => Active_Telegram_Call}
              Ico={"/Assets/telephone-call.svg"}
            />
            <Box sx={{ mx: 1 }}>
              <SwitchButton
                Current_state={Help}
                Change_State={() => Active_Help}
                Ico={"/Assets/help.svg"}
              />
            </Box>
            <SwitchButton
              Current_state={Calender}
              Change_State={() => Active_Calender}
              Ico={"/Assets/calendar.svg"}
            />
          </Box>
        </Box>
        {/* Content box */}
        <Box
          sx={{
            width: "100%",
            height: "calc(100% - 93px)",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default Bot;
