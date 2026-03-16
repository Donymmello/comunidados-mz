import { Container, Typography, Box, Button } from "@mui/material";
import ServiceCard from "../components/ServiceCard";
import analise from "../assets/analise.jpg";
import consultoria from "../assets/consultoria.jpg";
import reporting from "../assets/reporting.jpg";

import { Link } from "react-router-dom";

function ServicesSection() {
  return (
    <Container sx={{ mt: 10 }}>

      {/* Título */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h4">
          SERVIÇOS
        </Typography>

        <Box
          sx={{
            width: 340,
            height: 5,
            background: "#000",
            margin: "1px auto"
          }}
        />
      </Box>

      {/* Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr 1fr"
          },
          gap: 4
        }}
      >

        <ServiceCard
          image={consultoria}
          title="Consultoria científica"
          description="Ajuda na interpretação de dados e resultados."
        />

        <ServiceCard
          image={analise}
          title="Análise de dados"
          description="Transformo dados em informações claras."
        />

        <ServiceCard
          image={reporting}
          title="Reporting"
          description="Ajuda na criação de relatórios."
        />
      </Box>

      {/* Botão */}
      <Box textAlign="center" mt={6}>
        <Button
          component={Link} // tranforma o botão em um link
          to="/servicos" // link para a pagina serviços
          target="_blank" // abre em nova aba
          rel="noopener noreferrer" // segurança para links externos
          variant="contained"
          sx={{
            background: "#34b6e9",
            "&:hover": { background: "#000" }
          }}
        >
          Mais informações
        </Button>
      </Box>

    </Container>
  );
}

export default ServicesSection;