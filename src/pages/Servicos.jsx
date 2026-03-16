// IMPORTAÇÃO DOS COMPONENTES DO MATERIAL UI
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";

// Ícone usado no FAQ
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Link } from "react-router-dom";

function Servicos() {
  return (
    <>

      {/* HERO / CABEÇALHO DA PÁGINA */}
      {/* Esta parte cria a faixa vermelha no topo */}
      <Box
        sx={{
          background: "#34b6e9",
          color: "#fff",
          py: 8,
          textAlign: "center"
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          SERVIÇOS
        </Typography>

        <Typography mt={2}>
          Apoio profissional em análise de dados, consultoria e reporting.
        </Typography>
      </Box>


      {/* CONTAINER PRINCIPAL */}
      {/* Container centraliza o conteúdo na página */}
      <Container sx={{ mt: 10 }}>

        {/* INTRODUÇÃO */}
        <Box textAlign="center" mb={6}>
          <Typography variant="body1">
            Ofereço apoio em diferentes etapas do processo de pesquisa,
            desde o planeamento até à análise e apresentação dos resultados.
          </Typography>
        </Box>


        {/* GRID DOS SERVIÇOS */}
        {/* xs=12 ocupa toda largura no mobile */}
        {/* md=4 cria 3 colunas no desktop */}
        <Grid container spacing={4}>

          {/* SERVIÇO 1 */}
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
                  Análise de Dados
                </Typography>

                <Typography variant="body2">
                  Este serviço é destinado a quem já recolheu os seus dados
                  e procura apoio especializado para a etapa de análise.
                  São realizadas análises estatísticas adequadas aos objetivos
                  do estudo, interpretação dos resultados e elaboração de
                  tabelas, gráficos e relatório técnico.
                </Typography>

              </CardContent>
            </Card>
          </Grid>


          {/* SERVIÇO 2 */}
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
                  Consultoria
                </Typography>

                <Typography variant="body2">
                  Ideal para quem ainda está na fase de recolha de dados.
                  Inclui apoio no desenho de questionários, definição da
                  metodologia de pesquisa, escolha de métodos de análise
                  e esclarecimento de dúvidas estatísticas.
                </Typography>

              </CardContent>
            </Card>
          </Grid>


          {/* SERVIÇO 3 */}
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
                  Reporting
                </Typography>

                <Typography variant="body2">
                  Apoio na redação dos resultados da análise, organização
                  de tabelas e gráficos e elaboração de relatórios técnicos
                  ou científicos de forma clara e estruturada.
                </Typography>

              </CardContent>
            </Card>
          </Grid>

        </Grid>


        {/* BOTÕES DE AÇÃO */}
        {/* Flexbox para alinhar os botões */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "center",
            flexWrap: "wrap",
            mt: 8
          }}
        >

          {/* BOTÃO SOLICITAR ANÁLISE */}
          <Button
            component={Link} // tranforma o botão em um link
            to="https://docs.google.com/forms/d/e/1FAIpQLSd-Kmp8rbTe1_nLBh9BrUqrX5U9okOlJhl-XYFybX84_TV85w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="large"
            sx={{
              background: "#34b6e9",
              "&:hover": { background: "#a61c1c" }
            }}
          >
            Solicitar Análise
          </Button>


          {/* BOTÃO CONSULTORIA */}
          <Button
            component={Link}
            to="mailto:shelsealuis05@gmail.com"
            variant="contained"
            size="large"
            sx={{
              background: "#34b6e9",
              "&:hover": { background: "#a61c1c" }
            }}
          >
            Solicitar Consultoria
          </Button>


          {/* BOTÃO REPORTING */}
          <Button
            component={Link}
            to="mailto:shelsealuis05@gmail.com"
            variant="contained"
            size="large"
            sx={{
              background: "#34b6e9",
              "&:hover": { background: "#a61c1c" }
            }}
          >
            Solicitar Reporting
          </Button>

        </Box>


        {/* FAQ */}
        <Box mt={12}>

          <Typography variant="h5" textAlign="center" mb={4}>
            Perguntas Frequentes
          </Typography>


          {/* PERGUNTA 1 */}
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


          {/* PERGUNTA 2 */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Preciso ter os dados organizados?</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>
                Não necessariamente. Também posso ajudar na limpeza
                e organização inicial da base de dados.
              </Typography>
            </AccordionDetails>
          </Accordion>


          {/* PERGUNTA 3 */}
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

    </>
  );
}

export default Servicos;