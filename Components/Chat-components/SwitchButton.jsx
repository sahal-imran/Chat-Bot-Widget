import Button from "@mui/material/Button";
import Image from "next/image";
import Box from "@mui/material/Box";

function SwitchButton({ Current_state, Change_State, Ico }) {
  return (
    <Button
      variant="contained"
      onClick={Change_State()}
      sx={
        Current_state
          ? {
              minWidth: "57px",
              width: "57px",
              height: "62px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 0,
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
              borderRadius: "6px",
              background: "#DE2F52",
              "&:hover": {
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
                background: "#DE2F52",
              },
            }
          : {
              minWidth: "57px",
              width: "57px",
              height: "62px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 0,
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
              borderRadius: "6px",
              background: "#B16668",
              "&:hover": {
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
                background: "#B16668",
              },
            }
      }
    >
      <Box
        sx={{
          position: "relative",
          width: "40px",
          height: "40px",
          mt: 0.7,
        }}
      >
        <Image alt="" src={Ico} layout="fill" objectFit="contain" />
      </Box>
    </Button>
  );
}

export default SwitchButton;
