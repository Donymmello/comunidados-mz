import { Container, Typography, Box } from "@mui/material";

function Curso() {
  return (
    <Container sx={{ mt: 10 }}>

      <Box textAlign="center" mb={6}>
        <Typography variant="h4">
          CURSOS
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
        Informações sobre o curso de análise de dados.
      </Typography>

    </Container>
  );
}

export default Curso;