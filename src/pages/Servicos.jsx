import { Container, Typography, Box, Grid, Card, CardContent, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Servicos() {
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

      {/* Introdução */}
      <Box textAlign="center" mb={6}>
        <Typography variant="body1">
          Ofereço apoio em diferentes etapas do processo de pesquisa,
          desde o planeamento até à análise e apresentação dos resultados.
        </Typography>
      </Box>

      {/* Serviços */}
      <Grid container spacing={4}>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>

              <Typography variant="h6" gutterBottom>
                Análise de Dados
              </Typography>

              <Typography variant="body2">
                Para quem já possui os dados recolhidos e precisa de ajuda
                para realizar a análise estatística, interpretar resultados
                e transformar os dados em conclusões claras.
              </Typography>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>

              <Typography variant="h6" gutterBottom>
                Consultoria
              </Typography>

              <Typography variant="body2">
                Ideal para quem ainda está na fase de recolha de dados.
                Inclui apoio no desenho de questionários, escolha de métodos
                de análise e esclarecimento de dúvidas estatísticas.
              </Typography>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>

              <Typography variant="h6" gutterBottom>
                Reporting
              </Typography>

              <Typography variant="body2">
                Para quem precisa de apoio na redação dos resultados da
                análise, organização de tabelas, gráficos e escrita
                científica clara e estruturada.
              </Typography>

            </CardContent>
          </Card>
        </Grid>

      </Grid>

      {/* Botão de ação */}
      <Box textAlign="center" mt={6}>

        <Button
        component="a" // tranforma o botão em um link
              href="https://docs.google.com/forms/d/e/1FAIpQLSd-Kmp8rbTe1_nLBh9BrUqrX5U9okOlJhl-XYFybX84_TV85w/viewform?usp=publish-editor

*Fórmula para solicitação de análise de dados*" // link para soliciar análise de dados
              target="_blank" // abre em nova aba
              rel="noopener noreferrer" // segurança para links externos
          variant="contained"
          size="large"
          sx={{
            background: "#000",
            "&:hover": { background: "#333" }
          }}
        >
          Solicitar Análise
        </Button>

      </Box>

      {/* FAQ */}
      <Box mt={10}>

        <Typography variant="h5" textAlign="center" mb={4}>
          Perguntas Frequentes
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Que tipo de dados você analisa?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Posso trabalhar com dados provenientes de questionários,
              pesquisas acadêmicas, estudos de mercado e outros tipos
              de bases de dados.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Preciso ter os dados organizados?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Não necessariamente. Posso ajudar também na limpeza
              e organização inicial da base de dados.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Quanto tempo demora uma análise?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              O prazo depende da complexidade do projeto e da quantidade
              de dados, mas normalmente varia entre alguns dias e
              algumas semanas.
            </Typography>
          </AccordionDetails>
        </Accordion>

      </Box>

    </Container>
  );
}

export default Servicos;