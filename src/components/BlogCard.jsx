import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box
} from "@mui/material";

import YouTubeIcon from "@mui/icons-material/YouTube";

function BlogCard({ image, title, link }) {
  return (
    <Card
      component="a"
      href={link}
      target="_blank"
      sx={{
        textDecoration: "none",
        cursor: "pointer",
        overflow: "hidden",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 6
        }
      }}
    >

      <Box sx={{ position: "relative" }}>

        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
        />

        {/* overlay escuro */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.25)"
          }}
        />

        {/* ícone youtube */}
        <YouTubeIcon
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: 70,
            color: "#ff0000"
          }}
        />

      </Box>

      <CardContent>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600
          }}
        >
          {title}
        </Typography>

      </CardContent>

    </Card>
  );
}

export default BlogCard;