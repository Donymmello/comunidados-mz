import { Container, Grid, Typography, Button, Avatar, Box } from "@mui/material";

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
              src="/images/profile.jpg"
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
              Eu sou uma cientista apaixonada por dados.
              Há anos eu ajudo pesquisadores com a etapa
              de análise de dados dos seus projetos.
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