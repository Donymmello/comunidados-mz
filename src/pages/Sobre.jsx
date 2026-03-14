import { Container, Typography, Box, Grid, Avatar, Card, CardContent, Button } from "@mui/material";

function Sobre() {
  return (
    <Container sx={{ mt: 10 }}>

      {/* Título */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h4">
          SOBRE
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

      {/* Apresentação */}
      <Grid container spacing={4} alignItems="center" mb={8}>

        <Grid item xs={12} md={4} textAlign="center">
          <Avatar
            src="/images/profile.jpg"
            sx={{ width: 180, height: 180, margin: "0 auto" }}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h5" gutterBottom>
            Comunidades.MZ
          </Typography>

          <Typography>
            A Comunidades.MZ é uma iniciativa dedicada a apoiar estudantes,
            investigadores e profissionais que precisam de suporte em análise
            de dados, metodologia de pesquisa e comunicação de resultados.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            O nosso objetivo é tornar a análise de dados mais acessível,
            ajudando pessoas a transformar dados em conhecimento útil
            para projetos académicos e profissionais.
          </Typography>

        </Grid>

      </Grid>

      {/* O que fazemos */}
      <Typography variant="h5" textAlign="center" mb={4}>
        O que fazemos
      </Typography>

      <Grid container spacing={4} mb={8}>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>

              <Typography variant="h6" gutterBottom>
                Apoio em Pesquisa
              </Typography>

              <Typography variant="body2">
                Ajudamos investigadores e estudantes no planeamento
                de estudos, definição de metodologias e construção
                de instrumentos de recolha de dados.
              </Typography>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>

              <Typography variant="h6" gutterBottom>
                Análise Estatística
              </Typography>

              <Typography variant="body2">
                Transformamos dados em resultados compreensíveis
                através de técnicas estatísticas e visualização
                clara de informação.
              </Typography>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>

              <Typography variant="h6" gutterBottom>
                Comunicação de Resultados
              </Typography>

              <Typography variant="body2">
                Apoiamos na organização de relatórios, gráficos
                e escrita científica para apresentação clara
                dos resultados de pesquisa.
              </Typography>

            </CardContent>
          </Card>
        </Grid>

      </Grid>

      {/* Missão */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h5" gutterBottom>
          Nossa Missão
        </Typography>

        <Typography>
          Promover o uso correto de dados e métodos científicos
          para melhorar a qualidade da pesquisa e da tomada
          de decisões.
        </Typography>
      </Box>

      {/* Botão */}
      <Box textAlign="center">
        <Button
          variant="contained"
          size="large"
          sx={{
            background: "#000",
            "&:hover": { background: "#333" }
          }}
        >
          Entrar em Contacto
        </Button>
      </Box>

    </Container>
  );
}

export default Sobre;