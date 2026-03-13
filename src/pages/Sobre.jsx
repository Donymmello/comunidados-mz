import { Container, Typography, Box } from "@mui/material";

function Sobre() {
  return (
    <Container sx={{ mt: 10 }}>

      <Box textAlign="center" mb={6}>
        <Typography variant="h4">
          SOBRE
        </Typography>

        <Box
          sx={{
            width: 120,
            height: 3,
            background: "#000",
            margin: "10px auto"
          }}
        />
      </Box>

      <Typography>
        Informações completas sobre mim.
      </Typography>

    </Container>
  );
}

export default Sobre;