import { Box, Typography, IconButton } from "@mui/material";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <Box
      sx={{
        background: "#000",
        color: "#fff",
        padding: 6,
        marginTop: 10,
        textAlign: "center"
      }}
    >

      <Typography variant="h6">
        COMUNIDADOS.MZ
      </Typography>

      <Box mt={1}>

        <IconButton
          component="a"
          href="https://www.github.com/comunidados-mz/"
          target="_blank"
          sx={{ color: "#fff" }}
        >
          <GithubIcon />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.linkedin.com/in/comunidados-mz/"
          target="_blank"
          sx={{ color: "#fff" }}
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          component="a"
          href="https://instagram.com/comunidados_mz/"
          target="_blank"
          sx={{ color: "#fff" }}
        >
          <InstagramIcon />
        </IconButton>

        <IconButton
          component="a"
          href="https://youtube.com/@comuniDados_mz"
          target="_blank"
          sx={{ color: "#fff" }}
        >
          <YouTubeIcon />
        </IconButton>

        <IconButton
          component="a"
          href="mailto:shelsealuis05@gmail.com"
          sx={{ color: "#fff" }}
        >
          <EmailIcon />
        </IconButton>

      </Box>

      <Typography mt={3} variant="body2">
        Desenvolvido por Sidonio Aly. Todos os direitos reservados.
      </Typography>

    </Box>
  );
}

export default Footer;