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
import logo from "../assets/channel.jpg";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";

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
              border: "0px solid #333",
              borderRadius: "12px",
              position: "relative",
              top: 0,
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
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  letterSpacing: 2
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
          borderBottom: "6px solid #000",
          width: "80%",
          marginX: "auto", // Abreviação para marginLeft e marginRight: auto
          marginTop: 2,    // Opcional: espaçamento acima
          marginBottom: 2  // Opcional: espaçamento abaixo
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

            <Button component={Link} to="/" sx={{ color: "#000", fontWeight: 800 }}>
              PÁGINA INICIAL
            </Button>

            <Button component={Link} to="/sobre" sx={{ color: "#000", fontWeight: 800 }}>
              SOBRE
            </Button>

            <Button component={Link} to="/servicos" sx={{ color: "#000", fontWeight: 800 }}>
              SERVIÇOS
            </Button>

            <Button
              component={Link}
              to="https://www.youtube.com/@comuniDados_mz"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#000",
                fontWeight: 800
              }}
            >
              VIDEOS
            </Button>

          </Box>

          {/* SOCIAL */}
          <Box>

            <IconButton
              component={Link}
              to="https://www.github.com/comunidados-mz/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#000", // Cor padrão
                border: "0px solid #000", // Adiciona a borda
                padding: "8px", // Espaço entre o ícone e a borda
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.1)", // Efeito suave ao passar o mouse
                  borderColor: "#333"
                }
              }}
            >
              <GithubIcon sx={{ fontSize: 40 }} />
            </IconButton>


            <IconButton
              component={Link}
              to="https://www.linkedin.com/in/comunidados_mz/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#0077b5", // Cor oficial do LinkedIn
                border: "0px solid #0077b5", // Adiciona a borda
                padding: "8px", // Espaço entre o ícone e a borda
                "&:hover": {
                  backgroundColor: "rgba(0, 119, 181, 0.1)", // Efeito suave ao passar o mouse
                  borderColor: "#005582"
                }
              }}
            >
              <LinkedInIcon sx={{ fontSize: 40 }} /> {/* Aumenta o tamanho aqui */}
            </IconButton>



            <IconButton component={Link}
              to="https://www.instagram.com/comunidados_mz/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#e1306c", // Cor oficial do Instagram
                border: "0px solid #e1306c", // Adiciona a borda
                padding: "8px", // Espaço entre o ícone e a borda
                "&:hover": {
                  backgroundColor: "rgba(225, 48, 108, 0.1)", // Efeito suave ao passar o mouse
                  borderColor: "#d6336c"
                }
              }}>
              <InstagramIcon sx={{ fontSize: 40 }} /> {/* Aumenta o tamanho aqui */}
            </IconButton>

            <IconButton component={Link}
              to="https://www.youtube.com/@comuniDados_mz"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#ff0000", // Cor oficial do YouTube
                border: "0px solid #ff0000", // Adiciona a borda
                padding: "8px", // Espaço entre o ícone e a borda
                "&:hover": {
                  backgroundColor: "rgba(255, 0, 0, 0.1)", // Efeito suave ao passar o mouse
                  borderColor: "#cc0000"
                }
              }}>
              <YouTubeIcon sx={{ fontSize: 40 }} /> {/* Aumenta o tamanho aqui */}
            </IconButton>

            <IconButton component={Link}
              to="mailto:shelsealuis05@gmail.com"
              sx={{
                color: "#000", // Cor padrão
                border: "0px solid #000", // Adiciona a borda
                padding: "8px", // Espaço entre o ícone e a borda
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.1)", // Efeito suave ao passar o mouse
                  borderColor: "#333"
                }
              }}>
              <EmailIcon sx={{ fontSize: 40 }} />
            </IconButton>

          </Box>

        </Toolbar>
      </Container>

    </AppBar>
  );
}

export default Navbar;