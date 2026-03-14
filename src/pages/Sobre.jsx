import { Container, Typography, Box, Grid, Avatar, Card, CardContent, Button } from "@mui/material";
import profile from "../assets/channel.jpg"; // Certifique-se de ter uma imagem de perfil no caminho correto

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
            src={profile} // Use o caminho correto para a imagem
            sx={{ width: 180, height: 180, margin: "0 auto" }}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h5" gutterBottom>
            Comunidades.MZ
          </Typography>

          <Typography>
            é uma plataforma dedicada à promoção da tomada de decisões baseadas em evidência. Trabalhamos para apoiar pesquisadores, estudantes, profissionais e instituições no processo de organização, análise, interpretação e comunicação de dados.
            Mais do que executar análises, a ComuniDados procura aproximar pessoas e evidência, tornando os dados mais compreensíveis, úteis e aplicáveis em contextos académicos, profissionais e institucionais.
            Acreditamos que dados bem analisados e bem comunicados fortalecem pesquisas, qualificam relatórios, melhoram programas e apoiam decisões mais conscientes.

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

      {/* Visão */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h5" gutterBottom>
          Nossa Visão
        </Typography>

        <Typography>
          Ser uma referência lusófona em apoio à análise e interpretação de dados para investigação, aprendizagem e decisão.
        </Typography>
      </Box>

      {/* Valores */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h5" gutterBottom>
          Nossos Valores
        </Typography>

        <Typography>
          Rigor, clareza, ética, utilidade, aprendizagem contínua e compromisso com a evidência.
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