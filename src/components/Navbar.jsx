import { AppBar, Toolbar, Typography, Button, IconButton, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/comunidados.jpg";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";

function Navbar() {
  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar>
         <Link
        to="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <img
          src={logo}
          alt="Company Logo"
          style={{ width: '100px', marginRight: '1rem', cursor: 'pointer' }}
        />

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          COMUNIDADOS.MZ
        </Typography>
      </Link>

        {/* Links internos */}
        <Button component={Link} to="/">Home</Button>
        <Button component={Link} to="/sobre">Sobre</Button>
        <Button component={Link} to="/servicos">Serviços</Button>
        <Button component={Link} to="/curso">Cursos</Button>

        {/* Redes sociais */}
        <Box sx={{ ml: 2 }}>


          <IconButton
            component="a"
            href="https://linkedin.com/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://instagram.com/"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://youtube.com/"
            target="_blank"
          >
            <YouTubeIcon />
          </IconButton>

          <IconButton
            component="a"
            href="mailto:email@email.com"
          >
            <EmailIcon />
          </IconButton>

        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;