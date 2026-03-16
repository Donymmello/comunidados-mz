import { Box } from "@mui/material";
import logo from "../assets/channel.jpg";


function Loading () {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999
      }}
    >
      <img
        src={logo}
        alt="loading"
        style={{
          width: "120px",
          animation: "spin 1.5s linear infinite"
        }}
      />

      <style>
        {`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        `}
      </style>
    </Box>
  );
}

export default Loading;