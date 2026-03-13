import { Container, Typography, Box, Button } from "@mui/material";
import BlogCard from "../components/BlogCard";

function BlogSection() {
  return (
    <Container sx={{ mt: 10 }}>

      {/* Título */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h4">
          CURSOS
        </Typography>

        <Box
          sx={{
            width: 200,
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

        <BlogCard
          image="/images/blog1.jpg"
          title="Gráfico custo-benefício"
          description="O que estatística ensina."
        />

        <BlogCard
          image="/images/blog2.jpg"
          title="O que é um outlier?"
          description="Aprenda a identificar outliers."
        />

        <BlogCard
          image="/images/blog3.jpg"
          title="Probabilidade Mega-Sena"
          description="Como calcular probabilidades."
        />

      </Box>

      {/* Botão */}
      <Box textAlign="center" mt={6}>
        <Button
              component="a" // tranforma o botão em um link
              href="http://localhost:5173/curso" // link para a pagina curso
              target="_blank" // abre em nova aba
              rel="noopener noreferrer" // segurança para links externos
          variant="outlined"
          sx={{
            borderColor: "#000",
            color: "#000"
          }}
        >
          Ver todos os cursos
        </Button>
      </Box>

    </Container>
  );
}

export default BlogSection;