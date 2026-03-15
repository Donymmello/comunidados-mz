import { Container, Grid, Typography, Button, Avatar, Box } from "@mui/material";
import profile from "../assets/profile.jpeg"; // Importe a imagem do perfil

function AboutSection() {
  return (
    <Container sx={{ marginTop: 10 }}>

      <Box
        sx={{
          background: "#000",
          color: "#fff",
          padding: 6,
          borderRadius: 2
        }}
      >

        <Grid container spacing={4} alignItems="center">

          <Grid item xs={12} md={3}>
            <Avatar
              src={profile} // Use o caminho correto para a imagem
              sx={{
                width: 180,
                height: 180
              }}
            />
          </Grid>

          <Grid item xs={12} md={9}>
            <Typography variant="h5">
              Oi, eu sou a Shelsea Damiao!
            </Typography>

            <Typography sx={{ marginTop: 2 }}>
              Eu sou a fundadora da ComuniDados. Atuo na interseção entre análise de dados, investigação, monitoria e avaliação e comunicação de evidências, com interesse especial em tornar os dados mais acessíveis, úteis e aplicáveis em contextos reais.
            </Typography>

            <Button
              variant="contained"
              component="a" // tranforma o botão em um link
              href="https://www.linkedin.com/in/shelsea-dami%C3%A3o-6aa33a201?trk=contact-info
*LinkedIn*" // link para o currículo
              target="_blank" // abre em nova aba
              rel="noopener noreferrer" // segurança para links externos
              sx={{
                marginTop: 3,
                background: "#fff",
                color: "#000"
              }}
            >
              Acesso ao currículo completo

            </Button>

          </Grid>

        </Grid>

      </Box>

    </Container>
  );
}

export default AboutSection;