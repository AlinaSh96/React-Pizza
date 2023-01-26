import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
  CardActions,
  Button,
  List
} from "@mui/material";
import React from "react";
import { IPizza } from "../../models/IPizza";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { basketSlice } from "../../store/basket/BasketSlice";
import { selectCartItemById } from "../../store/basket/BasketSelector";
import { grey } from "@mui/material/colors";

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      color: theme.palette.primary.main,
    },
    footer: {
      justifyContent: 'space-between',
      height: '35px',
    },
    removeGoods: {
      width: '25px',
      height: '25px'
    }, 
    minus: {
      marginRight: '1rem',
    }
  };
});

interface PostItemProps {
  post: IPizza;
}

export const PizzaItem: React.FC<PostItemProps> = ({ post }) => {
  const { add, minus } = basketSlice.actions;
  const dispatch = useAppDispatch();
  const basketItem = useAppSelector(selectCartItemById(post.id));
  const { classes } = useStyles();
  const count = basketItem ? basketItem.count : "";

  function addCount() {
    const item: IPizza = {
      id: post.id,
      name: post.name,
      weight: post.weight,
      description: post.description,
      price: post.price,
      image: post.image,
      count: 0,
    };
    dispatch(add(item));
  }

  function minusCount() {
    const item: IPizza = {
      id: post.id,
      name: post.name,
      weight: post.weight,
      description: post.description,
      price: post.price,
      image: post.image,
      count: 0,
    };
    dispatch(minus(item));
  }

  return (
    <Grid item xs={12} md={4}>
      <Card
        sx={{
          height: "100%",
        }}
      >
        <CardMedia
          component="img"
          image={post.image}
          alt="green iguana"
          sx={{ width: 200, margin: '0 auto'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="span">
            {post.name}&ensp;
          </Typography>
          <Typography sx={{color: "grey"}} gutterBottom variant="h6" component="span">
            {post.weight} кг.
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {post.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.footer}>
          <Button onClick={addCount} size="small">
            Добавить
          </Button>
          <List > {count && <span className={classes.minus}>{count}</span>}
          {count && (
            <FontAwesomeIcon className={classes.removeGoods}
              onClick={minusCount}
              icon={faSquareMinus}
            ></FontAwesomeIcon>
          )}
          </List>
        </CardActions>
      </Card>
    </Grid>
  );
};
