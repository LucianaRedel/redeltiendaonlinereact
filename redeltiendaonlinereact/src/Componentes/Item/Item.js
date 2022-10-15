import React from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import { CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from "@mui/material";

const Item = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={styles.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={styles.title}
          >
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Precio ${product.price}
            Stock {product.stock}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Link to={'/producto/' + product.id}> 
          <Button  style={styles.title} size="small" color="primary">
          Ver Detalles
          </Button>
        </Link>
        <ItemCounter/>
      </CardActions>
    </Card>
  );
};

const styles = {
  container: {
    width: window.innerHeight > 900 ? "25%" : "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor:'white',
  },
  title: {
    fontFamily: 'Indie Flower',
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: 100,
  },
};

export default Item;