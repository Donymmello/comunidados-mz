import { Container, Typography, Box, Button } from "@mui/material";

import { Link } from "react-router-dom";

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
            width: 340,
            height: 5,
            background: "#000",
            margin: "10px auto"
          }}
        />
      </Box>

      {/* Botão */}
      <Box textAlign="center" mt={6}>
        <Button
              component={Link} // tranforma o botão em um link
              to="https://docs.google.com/forms/d/e/1FAIpQLSd-Kmp8rbTe1_nLBh9BrUqrX5U9okOlJhl-XYFybX84_TV85w/viewform?usp=publish-editor

*Fórmula para solicitação de análise de dados*" // link para soliciar análise de dados
              target="_blank" // abre em nova aba
              rel="noopener noreferrer" // segurança para links externos
          variant="contained"
          size="large"
          sx={{
            background: "#34b6e9",
              "&:hover": { background: "#a61c1c" }
          }}
        >
          Solicitar Análise
          
        </Button>
      </Box>

    </Container>
  );
}

export default PedidoSection;