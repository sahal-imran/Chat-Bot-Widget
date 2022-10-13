import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ClearIcon from "@mui/icons-material/Clear";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import SwitchButton from "../Chat-components/SwitchButton";
import IconButton from "@mui/material/IconButton";
import Excited from "../../public/Assets/emojis/1.Exited.png";
import Happy from "../../public/Assets/emojis/2.Happy.png";
import Proud from "../../public/Assets/emojis/3.Proud.png";
import Confused from "../../public/Assets/emojis/4.Confused.png";
import Shy from "../../public/Assets/emojis/5.Shy.png";
import Worried from "../../public/Assets/emojis/6.Worried.png";
import Lonely from "../../public/Assets/emojis/7.Lonely.png";
import Angry from "../../public/Assets/emojis/8.Angry.png";
import Sad from "../../public/Assets/emojis/9.Sad.png";

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

  const [botMsgCount, setBotMsgCount] = useState(0);

  useEffect(() => {
    if (Show_Bot == true) {
      if (botMsgCount == 0) {
        setTimeout(() => {
          setBotMsgCount(1);
        }, 3000);
      }
      if (botMsgCount == 1) {
        setTimeout(() => {
          setBotMsgCount(2);
        }, 3000);
      }
      if (botMsgCount == 3) {
        setTimeout(() => {
          setBotMsgCount(4);
        }, 3000);
      }
      if (botMsgCount == 5) {
        setTimeout(() => {
          setBotMsgCount(6);
        }, 3000);
      }
      if (botMsgCount == 7) {
        setTimeout(() => {
          setBotMsgCount(8);
        }, 3000);
      }
      if (botMsgCount == 8) {
        setTimeout(() => {
          setBotMsgCount(9);
        }, 3000);
      }
      if (botMsgCount == 9) {
        setTimeout(() => {
          setBotMsgCount(10);
        }, 3000);
      }
      if (botMsgCount == 10) {
        setTimeout(() => {
          setBotMsgCount(11);
        }, 3000);
      }
    }
  }, [Show_Bot, botMsgCount]);

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
              mt: 0.5,
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
                width: { md: "881px", xs: "90%" },
                height: "587px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                background: "#FFFFFF",
                borderRadius: "10px",
                transition: "all 0.3s ease",
                position: "absolute",
                right: { md: "30px", xs: "20px" },
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
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Chat Box */}
          <Box
            sx={{
              width: { md: "60%", xs: "100%" },
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              background: "rgba(253, 143, 142, 0.1)",
              boxShadow:
                "0px 4px 4px rgba(0, 0, 0, 0.1), inset 0px 4px 7px rgba(0, 0, 0, 0.07)",
              borderRadius: "5px",
              "&::-webkit-scrollbar": { width: "0px" },
              p: { md: 2, xs: 2 },
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "calc(100% - 70px)",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                flexDirection: "column",
                "&::-webkit-scrollbar": { width: "0px" },
                overflowY: "auto",
              }}
            >
              {/* Welcome message */}
              {botMsgCount >= 0 && (
                <Typography
                  sx={{
                    fontFamily: "Assistant",
                    fontSize: { md: "18px", xs: "16px" },
                    lineHeight: "23.54px",
                    letterSpacing: "4%",
                    fontWeight: 600,
                    fontStyle: "normal",
                    textTransform: "capitalize",
                    color: "#FFFFFF",
                    background: "#9A4A4D",
                    borderRadius: "10px",
                    px: 3,
                    py: 1.5,
                    textAlign: "start",
                    alignSelf: "start",
                    width: "80%",
                  }}
                >
                  Hello, I am Mr. Andre your virtual mentor, and I am here to
                  support and guide you.
                </Typography>
              )}
              {/* Bot */}
              {botMsgCount > 0 && (
                <Typography
                  sx={{
                    fontFamily: "Assistant",
                    fontSize: { md: "18px", xs: "16px" },
                    lineHeight: "23.54px",
                    letterSpacing: "4%",
                    fontWeight: 600,
                    fontStyle: "normal",
                    textTransform: "capitalize",
                    color: "#FFFFFF",
                    background: "#9A4A4D",
                    borderTopLeftRadius: "25px",
                    borderBottomRightRadius: "25px",
                    px: 3,
                    py: 1.5,
                    textAlign: "start",
                    alignSelf: "start",
                    mt: 2,
                    width: "80%",
                  }}
                >
                  Can you tell me how you feel today?
                </Typography>
              )}
              {/* User */}
              {botMsgCount > 1 && (
                <Box
                  sx={{
                    mt: 2,
                    alignSelf: "end",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Assistant",
                      fontSize: { md: "18px", xs: "16px" },
                      lineHeight: "23.54px",
                      letterSpacing: "4%",
                      fontWeight: 600,
                      fontStyle: "normal",
                      textTransform: "capitalize",
                      color: "#FFFFFF",
                      background: "#FD8F8E",
                      borderTopLeftRadius: "25px",
                      borderBottomRightRadius: "25px",
                      px: 3,
                      py: 1.5,
                      mt: 2.5,
                    }}
                  >
                    {/* Hi ! Welcome to our support */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "right",
                        width: "100%",
                        flexWrap: "wrap",
                      }}
                    >
                      <IconButton>
                        <Image
                          src={Excited}
                          height="30px"
                          width="30px"
                          sx={{ mr: 3 }}
                        />
                      </IconButton>
                      <IconButton>
                        <Image
                          src={Happy}
                          height="30px"
                          width="30px"
                          sx={{ mr: 3 }}
                        />
                      </IconButton>
                      <IconButton>
                        <Image
                          src={Proud}
                          height="30px"
                          width="30px"
                          sx={{ mr: 3 }}
                        />
                      </IconButton>
                      <IconButton>
                        <Image
                          src={Confused}
                          height="30px"
                          width="30px"
                          sx={{ mr: 3 }}
                        />
                      </IconButton>
                      <IconButton>
                        <Image
                          src={Shy}
                          height="30px"
                          width="30px"
                          sx={{ mr: 3 }}
                        />
                      </IconButton>
                      <IconButton>
                        <Image
                          src={Worried}
                          height="30px"
                          width="30px"
                          sx={{ mr: 3 }}
                        />
                      </IconButton>
                      <IconButton>
                        <Image
                          src={Lonely}
                          height="30px"
                          width="30px"
                          sx={{ mr: 3 }}
                        />
                      </IconButton>
                      <IconButton onClick={() => setBotMsgCount(3)}>
                        <Image
                          src={Angry}
                          height="30px"
                          width="30px"
                          sx={{ mr: 3 }}
                        />
                      </IconButton>
                      <IconButton>
                        <Image
                          src={Sad}
                          height="30px"
                          width="30px"
                          sx={{ mr: 3 }}
                        />
                      </IconButton>
                    </Box>
                  </Typography>

                  {/* Icon */}
                  <Box
                    sx={{
                      position: "relative",
                      width: { md: "60px", xs: "40px" },
                      height: { md: "60px", xs: "40px" },
                      ml: { md: 2, xs: 1 },
                      borderRadius: "50px",
                      overflow: "hidden",
                      border: "1px solid #FD8F8E",
                    }}
                  >
                    <Image
                      alt=""
                      src={"/Assets/user.png"}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                </Box>
              )}
              {/* Bot */}
              {botMsgCount > 2 && (
                <Typography
                  sx={{
                    fontFamily: "Assistant",
                    fontSize: { md: "18px", xs: "16px" },
                    lineHeight: "23.54px",
                    letterSpacing: "4%",
                    fontWeight: 600,
                    fontStyle: "normal",
                    textTransform: "capitalize",
                    color: "#FFFFFF",
                    background: "#9A4A4D",
                    borderTopLeftRadius: "25px",
                    borderBottomRightRadius: "25px",
                    px: 3,
                    py: 1.5,
                    textAlign: "start",
                    alignSelf: "start",
                    mt: 2,
                    width: "80%",
                  }}
                >
                  I believe anger can be controlled
                </Typography>
              )}
              {botMsgCount > 2 && (
                <Typography
                  sx={{
                    fontFamily: "Assistant",
                    fontSize: { md: "18px", xs: "16px" },
                    lineHeight: "23.54px",
                    letterSpacing: "4%",
                    fontWeight: 600,
                    fontStyle: "normal",
                    textTransform: "capitalize",
                    color: "#FFFFFF",
                    background: "#9A4A4D",
                    borderTopLeftRadius: "25px",
                    borderBottomRightRadius: "25px",
                    px: 3,
                    py: 1.5,
                    textAlign: "start",
                    alignSelf: "start",
                    mt: 2,
                    width: "80%",
                  }}
                >
                  I would also you like to tell me what could have made you
                  angry?
                </Typography>
              )}

              {/* User */}
              {botMsgCount > 3 && (
                <Box
                  sx={{
                    mt: 2,
                    alignSelf: "end",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Assistant",
                      fontSize: { md: "18px", xs: "16px" },
                      lineHeight: "23.54px",
                      letterSpacing: "4%",
                      fontWeight: 600,
                      fontStyle: "normal",
                      textTransform: "capitalize",
                      color: "#FFFFFF",
                      background: "#FD8F8E",
                      borderTopLeftRadius: "25px",
                      borderBottomRightRadius: "25px",
                      px: 3,
                      py: 1.5,
                      mt: 2.5,
                    }}
                  >
                    {/* Hi ! Welcome to our support */}

                    <IconButton onClick={() => setBotMsgCount(5)}>
                      Click to Skip
                    </IconButton>
                  </Typography>

                  {/* Icon */}
                  <Box
                    sx={{
                      position: "relative",
                      width: { md: "60px", xs: "40px" },
                      height: { md: "60px", xs: "40px" },
                      ml: { md: 2, xs: 1 },
                      mt: 8,
                      borderRadius: "50px",
                      overflow: "hidden",
                      border: "1px solid #FD8F8E",
                    }}
                  >
                    <Image
                      alt=""
                      src={"/Assets/user.png"}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                </Box>
              )}
              {botMsgCount > 4 && (
                <Typography
                  sx={{
                    fontFamily: "Assistant",
                    fontSize: { md: "18px", xs: "16px" },
                    lineHeight: "23.54px",
                    letterSpacing: "4%",
                    fontWeight: 600,
                    fontStyle: "normal",
                    textTransform: "capitalize",
                    color: "#FFFFFF",
                    background: "#9A4A4D",
                    borderTopLeftRadius: "25px",
                    borderBottomRightRadius: "25px",
                    px: 3,
                    py: 1.5,
                    textAlign: "start",
                    alignSelf: "start",
                    mt: 2,
                    width: "80%",
                  }}
                >
                  Do you want to talk about it with someone?
                </Typography>
              )}
              {/* User */}
              {botMsgCount > 5 && (
                <Box
                  sx={{
                    mt: 2,
                    alignSelf: "end",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Assistant",
                      fontSize: { md: "18px", xs: "16px" },
                      lineHeight: "23.54px",
                      letterSpacing: "4%",
                      fontWeight: 600,
                      fontStyle: "normal",
                      textTransform: "capitalize",
                      color: "#FFFFFF",
                      background: "#FD8F8E",
                      borderTopLeftRadius: "25px",
                      borderBottomRightRadius: "25px",
                      px: 3,
                      py: 1.5,
                      mt: 2.5,
                    }}
                  >
                    {/* Hi ! Welcome to our support */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "right",
                        flexDirection: "column",

                        flexWrap: "wrap",
                      }}
                    >
                      <IconButton
                        onClick={() => setBotMsgCount(7)}
                        sx={{ marginLeft: "auto", width: "max-content" }}
                      >
                        Yes
                      </IconButton>
                      <IconButton
                        onClick={() => setBotMsgCount(7)}
                        sx={{ marginLeft: "auto", width: "max-content" }}
                      >
                        No
                      </IconButton>
                      <IconButton
                        onClick={() => setBotMsgCount(7)}
                        sx={{ marginLeft: "auto", width: "max-content" }}
                      >
                        Not now
                      </IconButton>
                      <IconButton
                        onClick={() => setBotMsgCount(7)}
                        sx={{ marginLeft: "auto", width: "max-content" }}
                      >
                        Wish not to talk about it
                      </IconButton>
                    </Box>
                  </Typography>

                  {/* Icon */}
                  <Box
                    sx={{
                      position: "relative",
                      width: { md: "60px", xs: "40px" },
                      height: { md: "60px", xs: "40px" },
                      ml: { md: 2, xs: 1 },
                      borderRadius: "50px",
                      overflow: "hidden",
                      border: "1px solid #FD8F8E",
                    }}
                  >
                    <Image
                      alt=""
                      src={"/Assets/user.png"}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                </Box>
              )}
              {botMsgCount > 6 && (
                <Typography
                  sx={{
                    fontFamily: "Assistant",
                    fontSize: { md: "18px", xs: "16px" },
                    lineHeight: "23.54px",
                    letterSpacing: "4%",
                    fontWeight: 600,
                    fontStyle: "normal",
                    textTransform: "capitalize",
                    color: "#FFFFFF",
                    background: "#9A4A4D",
                    borderTopLeftRadius: "25px",
                    borderBottomRightRadius: "25px",
                    px: 3,
                    py: 1.5,
                    textAlign: "start",
                    alignSelf: "start",
                    mt: 2,
                    width: "80%",
                  }}
                >
                  Thank you for giving your precious time to this, I have some
                  motivational words for you and trust me, they are super cool.
                </Typography>
              )}
              {botMsgCount > 7 && (
                <Typography
                  sx={{
                    fontFamily: "Assistant",
                    fontSize: { md: "18px", xs: "16px" },
                    lineHeight: "23.54px",
                    letterSpacing: "4%",
                    fontWeight: 600,
                    fontStyle: "normal",
                    textTransform: "capitalize",
                    color: "#FFFFFF",
                    background: "#9A4A4D",
                    borderTopLeftRadius: "25px",
                    borderBottomRightRadius: "25px",
                    px: 3,
                    py: 1.5,
                    textAlign: "start",
                    alignSelf: "start",
                    mt: 2,
                    width: "80%",
                  }}
                >
                  “If you can control the way you feel then you are on your way
                  to freedom” Also
                </Typography>
              )}
              {botMsgCount > 8 && (
                <Typography
                  sx={{
                    fontFamily: "Assistant",
                    fontSize: { md: "18px", xs: "16px" },
                    lineHeight: "23.54px",
                    letterSpacing: "4%",
                    fontWeight: 600,
                    fontStyle: "normal",
                    textTransform: "capitalize",
                    color: "#FFFFFF",
                    background: "#9A4A4D",
                    borderTopLeftRadius: "25px",
                    borderBottomRightRadius: "25px",
                    px: 3,
                    py: 1.5,
                    textAlign: "start",
                    alignSelf: "start",
                    mt: 2,
                    width: "80%",
                  }}
                >
                  “If you are patient in one moment of anger, you will escape a
                  hundred days of sorrow”
                </Typography>
              )}
              {botMsgCount > 9 && (
                <Typography
                  sx={{
                    fontFamily: "Assistant",
                    fontSize: { md: "18px", xs: "16px" },
                    lineHeight: "23.54px",
                    letterSpacing: "4%",
                    fontWeight: 600,
                    fontStyle: "normal",
                    textTransform: "capitalize",
                    color: "#FFFFFF",
                    background: "#9A4A4D",
                    borderTopLeftRadius: "25px",
                    borderBottomRightRadius: "25px",
                    px: 3,
                    py: 1.5,
                    textAlign: "start",
                    alignSelf: "start",
                    mt: 2,
                    width: "80%",
                  }}
                >
                  Sounds cool right? I have another package for you and it
                  sounds more interesting
                </Typography>
              )}
              {botMsgCount > 10 && (
                <Typography
                  sx={{
                    fontFamily: "Assistant",
                    fontSize: { md: "18px", xs: "16px" },
                    lineHeight: "23.54px",
                    letterSpacing: "4%",
                    fontWeight: 600,
                    fontStyle: "normal",
                    textTransform: "capitalize",
                    color: "#FFFFFF",
                    background: "#9A4A4D",
                    borderTopLeftRadius: "25px",
                    borderBottomRightRadius: "25px",
                    px: 3,
                    py: 1.5,
                    textAlign: "start",
                    alignSelf: "start",
                    mt: 2,
                    width: "80%",
                  }}
                >
                  It is a word of affirmation to you and I want you to say it to
                  yourself, it will help you feel better.
                </Typography>
              )}

              {botMsgCount > 11 && (
                <Typography
                  sx={{
                    fontFamily: "Assistant",
                    fontSize: { md: "18px", xs: "16px" },
                    lineHeight: "23.54px",
                    letterSpacing: "4%",
                    fontWeight: 600,
                    fontStyle: "normal",
                    textTransform: "capitalize",
                    color: "#FFFFFF",
                    background: "#9A4A4D",
                    borderTopLeftRadius: "25px",
                    borderBottomRightRadius: "25px",
                    px: 3,
                    py: 1.5,
                    textAlign: "start",
                    alignSelf: "start",
                    mt: 2,
                    width: "80%",
                  }}
                >
                  Word of Affirmation: I refuse to be angry, I take charge of my
                  mind.
                </Typography>
              )}
            </Box>

            {/* Message typer
            <Box
              sx={{
                width: "100%",
                height: "70px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "90%",
                  height: "62px",
                  background: "#F8F8F8",
                  borderRadius: "10px",
                  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Input *+/}
                <Box
                  sx={{
                    width: { md: "85%", xs: "90%" },
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <input
                    type="text"
                    style={{
                      outline: "none",
                      boxShadow: "none",
                      background: "transparent",
                      border: "none",
                      width: "100%",
                      height: "100%",
                      fontFamily: "Assistant",
                      fontSize: "20px",
                      lineHeight: "26.16px",
                      letterSpacing: "4%",
                      fontWeight: 600,
                      fontStyle: "normal",
                      color: "#B16668",
                      paddingLeft: "20px",
                    }}
                    placeholder="Type your message"
                  />
                </Box>
                {/* Button *+/}
                <Box
                  sx={{
                    width: { md: "15%", xs: "20%" },
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    sx={{
                      width: "38px",
                      height: "38px",
                      background: "#FFFFFF",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "21.27px",
                        height: "21.27px",
                        mt: 0.5,
                        mr: 0.1,
                      }}
                    >
                      <Image
                        alt=""
                        src={"/Assets/telegram-icon.svg"}
                        layout="fill"
                        objectFit="cover"
                      />
                    </Box>
                  </IconButton>
                </Box>
              </Box>
            </Box> */}
          </Box>

          {/* Image */}
          <Box
            sx={{
              position: "relative",
              width: "40%",
              height: "337px",
              display: { md: "block", xs: "none" },
            }}
          >
            <Image
              alt=""
              src={"/Assets/Chatting-main.svg"}
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Bot;
