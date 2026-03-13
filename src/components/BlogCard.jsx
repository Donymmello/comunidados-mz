import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function BlogCard({ image, title, description }) {
  return (
    <Card>
      <CardMedia component="img" height="200" image={image} />

      <CardContent>
        <Typography variant="h6">
          {title}
        </Typography>

        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BlogCard;