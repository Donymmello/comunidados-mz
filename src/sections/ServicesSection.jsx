import { Container, Typography, Box } from "@mui/material";
import ServiceCard from "../components/ServiceCard";
import analise from "../assets/analise.jpg";
import consultoria from "../assets/consultoria.jpg";
import reporting from "../assets/reporting.jpg";

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
            width: 120,
            height: 3,
            background: "#000",
            margin: "10px auto"
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

    </Container>
  );
}

export default ServicesSection;