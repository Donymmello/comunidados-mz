import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

function ServiceCard({ image, title, description }) {
  return (
    <Card>
      <CardMedia component="img" height="200" image={image} />

      <CardContent>
        <Typography variant="h6">{title}</Typography>

        <Typography variant="body2">
          {description}
        </Typography>

        <Button
        component="a" // tranforma o botão em um link
              href="http://localhost:5173/servicos" // link para a pagina serviços
              target="_blank" // abre em nova aba
              rel="noopener noreferrer" // segurança para links externos
  variant="outlined"
  sx={{
    marginTop: 2,
    borderColor: "#000",
    color: "#000"
  }}
>
  Mais informações
</Button>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;