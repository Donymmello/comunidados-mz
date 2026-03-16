import { Container, Typography, Box, Button } from "@mui/material";
import BlogCard from "../components/BlogCard";

import { Link } from "react-router-dom";

function BlogSection() {
  return (
    <Container sx={{ mt: 10 }}>

      {/* Título */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h4">
          VIDEOS
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
  image="https://img.youtube.com/vi/gssTq_X_hhY/maxresdefault.jpg"
  title="Introdução ao R Markdown: Gere Relatórios em PDF, Word e HTML"
  link="https://youtu.be/gssTq_X_hhY"
/>

<BlogCard
  image="https://img.youtube.com/vi/tK26WDKGNdU/maxresdefault.jpg"
  title="Como Usar o gtsummary no R para Tabelas Estatísticas Profissionais"
  link="https://youtu.be/tK26WDKGNdU"
/>

<BlogCard
  image="https://img.youtube.com/vi/6kz-NKA_yKU/maxresdefault.jpg"
  title="Como Criar Mapas no Excel"
  link="https://youtu.be/6kz-NKA_yKU"
/>

      </Box>

      {/* Botão */}
      <Box textAlign="center" mt={6}>
        <Button
          component={Link} // tranforma o botão em um link
          to="https://www.youtube.com/@comuniDados_mz/videos" // link para a pagina de videos
          target="_blank" // abre em nova aba
          rel="noopener noreferrer" // segurança para links externos
          variant="contained"
          sx={{
            background: "#34b6e9",
              "&:hover": { background: "#a61c1c" }
          }}
        >
          Ver todos os videos
        </Button>
      </Box>

    </Container>
  );
}

export default BlogSection;