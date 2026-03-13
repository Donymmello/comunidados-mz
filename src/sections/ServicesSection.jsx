import { Container, Typography, Box } from "@mui/material";
import ServiceCard from "../components/ServiceCard";

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
          image="/images/service1.jpg"
          title="Consultoria científica"
          description="Ajuda na interpretação de dados e resultados."
        />

        <ServiceCard
          image="/images/service2.jpg"
          title="Análise de dados"
          description="Transformo dados em informações claras."
        />

        <ServiceCard
          image="/images/service3.jpg"
          title="Curso de análise"
          description="Aprenda análise de dados do zero."
        />

      </Box>

    </Container>
  );
}

export default ServicesSection;