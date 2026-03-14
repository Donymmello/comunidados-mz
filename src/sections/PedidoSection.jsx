import { Container, Typography, Box, Button } from "@mui/material";

function PedidoSection() {
  return (
    <Container sx={{ mt: 10 }}>

      {/* Título */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h4">
          Gostou dos nossos serviços? Faça seu pedido!
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

      {/* Botão */}
      <Box textAlign="center" mt={6}>
        <Button
              component="a" // tranforma o botão em um link
              href="https://docs.google.com/forms/d/e/1FAIpQLSd-Kmp8rbTe1_nLBh9BrUqrX5U9okOlJhl-XYFybX84_TV85w/viewform?usp=publish-editor

*Fórmula para solicitação de análise de dados*" // link para soliciar análise de dados
              target="_blank" // abre em nova aba
              rel="noopener noreferrer" // segurança para links externos
          variant="outlined"
          size="large"
          sx={{
            background: "#000",
            "&:hover": { background: "#333" }
          }}
        >
          Solicitar Análise
        </Button>
      </Box>

    </Container>
  );
}

export default PedidoSection;