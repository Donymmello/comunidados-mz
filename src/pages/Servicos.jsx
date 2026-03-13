import { Container, Typography, Box } from "@mui/material";

function Servicos() {
  return (
    <Container sx={{ mt: 10 }}>

      <Box textAlign="center" mb={6}>
        <Typography variant="h4">
          SERVIÇOS
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
        Lista completa de serviços oferecidos.
      </Typography>

    </Container>
  );
}

export default Servicos;