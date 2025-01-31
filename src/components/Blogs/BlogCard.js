import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

const BlogCard = ({ image, title, date, href }) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "550px",
        margin: "auto",
        paddingBottom: "8px", // Reduced padding to decrease white space
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        transition: "transform 0.5s, box-shadow 0.5s",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardActionArea href={href} target="_blank">
        <CardMedia
          component="img"
          image={image}
          alt={title}
          loading="lazy"
          sx={{
            width: "100%",
            height: "300px", // Reduced height for less white space
            borderRadius: "8px 8px 0 0",
            objectFit: "cover",
          }}
        />
        <CardContent sx={{ padding: 2 }}> {/* Reduced padding */}
          <Typography
            variant="h5" // Decreased font size for title
            component="h3"
            sx={{
              fontFamily: "merriweather",
              fontSize: "22px", // Decreased font size
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: "0.00938em",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            align="right"
            sx={{
              fontFamily: "merriweather",
              fontSize: "16px", // Decreased font size for date
            }}
          >
            {date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
