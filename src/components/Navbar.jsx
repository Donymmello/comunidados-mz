import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container
} from "@mui/material";

import { Link } from "react-router-dom";
import logo from "../assets/comunidados.jpg";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";

function Navbar() {
  return (
    <AppBar position="static" sx={{ background: "#fff", color: "#000" }} elevation={3}>

      {/* LOGO CENTRAL */}
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "center", position: "relative" }}>

          <Box
            sx={{
              background: "#fff",
              px: 4,
              py: 1,
              border: "2px solid #333",
              borderRadius: "6px",
              position: "relative",
              top: 25,
              zIndex: 2
            }}
          >

            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit"
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: "60px",
                  marginRight: "10px"
                }}
              />

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  letterSpacing: 1
                }}
              >
                COMUNIDADOS.MZ
              </Typography>

            </Link>

          </Box>

        </Toolbar>
      </Container>

      {/* LINHA */}
      <Box
        sx={{
          borderBottom: "3px solid #000",
          width: "100%"
        }}
      />

      {/* MENU */}
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 1
          }}
        >

          {/* LINKS */}
          <Box>

            <Button component={Link} to="/" sx={{ color: "#000", fontWeight: 600 }}>
              PÁGINA INICIAL
            </Button>

            <Button component={Link} to="/sobre" sx={{ color: "#000", fontWeight: 600 }}>
              SOBRE
            </Button>

            <Button component={Link} to="/servicos" sx={{ color: "#000", fontWeight: 600 }}>
              SERVIÇOS
            </Button>

            <Button component={Link} to="/curso" sx={{ color: "#000", fontWeight: 600 }}>
              VIDEOS
            </Button>

          </Box>

          {/* SOCIAL */}
          <Box>


            <IconButton component="a" href="https://linkedin.com" target="_blank">
              <LinkedInIcon />
            </IconButton>

            <IconButton component="a" href="https://instagram.com" target="_blank">
              <InstagramIcon />
            </IconButton>

            <IconButton component="a" href="https://youtube.com" target="_blank">
              <YouTubeIcon />
            </IconButton>

            <IconButton component="a" href="mailto:email@email.com">
              <EmailIcon />
            </IconButton>

          </Box>

        </Toolbar>
      </Container>

    </AppBar>
  );
}

export default Navbar;