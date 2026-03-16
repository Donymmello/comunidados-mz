// IMPORTAÇÃO DOS COMPONENTES DO MATERIAL UI
import {
  Container,
  Typography,
  Box,
  Grid,
  Avatar,
  Card,
  CardContent,
  Button
} from "@mui/material";

// IMPORTAÇÃO DA IMAGEM DE PERFIL
import profile from "../assets/channel.jpg";

function Sobre() {
  return (
    <>

      {/* HERO / CABEÇALHO DA PÁGINA */}
      {/* Faixa vermelha no topo igual à página de serviços */}
      <Box
        sx={{
          background: "#34b6e9",
          color: "#fff",
          py: 8,
          textAlign: "center"
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          SOBRE
        </Typography>

        <Typography mt={2}>
          Conheça a iniciativa ComuniDados e o trabalho que realizamos com dados.
        </Typography>
      </Box>


      {/* CONTAINER PRINCIPAL */}
      <Container sx={{ mt: 10 }}>

        {/* APRESENTAÇÃO */}
        {/* Grid responsivo */}
        <Grid container spacing={4} alignItems="center" mb={8}>

          {/* FOTO */}
          <Grid item xs={12} md={4} textAlign="center">

            <Avatar
              src={profile}
              sx={{
                width: 180,
                height: 180,
                margin: "0 auto"
              }}
            />

          </Grid>


          {/* TEXTO */}
          <Grid item xs={12} md={8}>

            <Typography variant="h5" gutterBottom>
              ComuniDados.MZ
            </Typography>

            <Typography>
              A ComuniDados é uma plataforma dedicada à promoção da
              tomada de decisões baseadas em evidência.
              Trabalhamos para apoiar pesquisadores, estudantes,
              profissionais e instituições no processo de organização,
              análise, interpretação e comunicação de dados.
            </Typography>

            <Typography sx={{ mt: 2 }}>
              Mais do que executar análises, a ComuniDados procura
              aproximar pessoas e evidência, tornando os dados mais
              compreensíveis, úteis e aplicáveis em contextos
              académicos, profissionais e institucionais.
            </Typography>

            <Typography sx={{ mt: 2 }}>
              O nosso objetivo é tornar a análise de dados mais
              acessível, ajudando pessoas a transformar dados em
              conhecimento útil para projetos académicos e profissionais.
            </Typography>

          </Grid>

        </Grid>


        {/* O QUE FAZEMOS */}
        <Typography variant="h5" textAlign="center" mb={4}>
          O que fazemos
        </Typography>

        {/* CARDS DE SERVIÇOS */}
        <Grid container spacing={4} mb={8}>

          {/* CARD 1 */}
          <Grid item xs={12} md={4}>

            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6
                }
              }}
            >
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


          {/* CARD 2 */}
          <Grid item xs={12} md={4}>

            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6
                }
              }}
            >
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


          {/* CARD 3 */}
          <Grid item xs={12} md={4}>

            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6
                }
              }}
            >
              <CardContent>

                <Typography variant="h6" gutterBottom>
                  Comunicação de Resultados
                </Typography>

                <Typography variant="body2">
                  Apoiamos na organização de relatórios,
                  gráficos e escrita científica para
                  apresentação clara dos resultados
                  de pesquisa.
                </Typography>

              </CardContent>
            </Card>

          </Grid>

        </Grid>


        {/* MISSÃO */}
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


        {/* VISÃO */}
        <Box textAlign="center" mb={6}>

          <Typography variant="h5" gutterBottom>
            Nossa Visão
          </Typography>

          <Typography>
            Ser uma referência lusófona em apoio à análise
            e interpretação de dados para investigação,
            aprendizagem e decisão.
          </Typography>

        </Box>


        {/* VALORES */}
        <Box textAlign="center" mb={6}>

          <Typography variant="h5" gutterBottom>
            Nossos Valores
          </Typography>

          <Typography>
            Rigor, clareza, ética, utilidade, aprendizagem contínua
            e compromisso com a evidência.
          </Typography>

        </Box>


        {/* BOTÃO DE CONTACTO */}
        <Box textAlign="center">

          <Button
            variant="contained"
            size="large"
            sx={{
              background: "#34b6e9",
              "&:hover": { background: "#a61c1c" }
            }}
          >
            Entrar em Contacto
          </Button>

        </Box>

      </Container>

    </>
  );
}

export default Sobre;