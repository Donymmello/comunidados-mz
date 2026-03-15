import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function BlogCard({ image, title, link }) {
  return (
    <Card
      component="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        textDecoration: "none",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6
        }
      }}
    >

      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ height: 200, objectFit: "cover" }}
      />

      <CardContent>
        <Typography variant="h6" sx={{ color: "#000" }}>
          {title}
        </Typography>
      </CardContent>

    </Card>
  );
}

export default BlogCard;