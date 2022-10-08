import React from 'react';
import Card from '@mui/material/Card'; 
import ItemCounter from '../ItemCounter/ItemCounter';
import swal from "sweetalert";
import {
    CardContent,
    CardMedia,
    Typography,
    Button,
    CardActionArea,
    CardActions,
  } from "@mui/material";

export const Item = ({ product }) => {

    return (
        <>
      <Card sx={{ maxWidth: 345 }} style={styles.container}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.imagen}
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
              ${product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Ver mas detalles
          </Button>
        </CardActions>
        <ItemCounter/>
      </Card>      
</>
    );
  };
  
const styles = {
    container: {
      width: window.innerHeight > 900 ? "25%" : "90%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: 20,
      backgroundColor: "white",
      
    },
    title: {
      textOverflow: "ellipsis",
      overflow: "hidden",
      height: 100,
      fontFamily: "Indie Flower",
    },
  };
  
