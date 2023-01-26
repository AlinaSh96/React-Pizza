import React from "react";
import { IPizza } from "../../models/IPizza";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { selectBasketItems } from "../../store/basket/BasketSelector";
import { basketSlice } from "../../store/basket/BasketSlice";
import styles from "./styles.module.scss";
import { selectCartItemById } from "../../store/basket/BasketSelector";
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

interface PostItemProps {
  post: IPizza;
}


export const MenuHeader: React.FC = () => {

  return (<div className={styles.header}>
    <div> <Typography  sx={{ fontFamily: 'Monospace' }} gutterBottom variant="h5" component="span">
      Пиццы&ensp;
    </Typography>
      <Typography  sx={{ fontFamily: 'Monospace' }} gutterBottom variant="h5" component="span">
        20шт&ensp;
      </Typography>
      </div>
      <div>
      <Typography component="span"  sx={{ fontFamily: 'Monospace', cursor:'pointer' }}>По популярности </Typography>
      <Typography component="span"  sx={{ fontFamily: 'Monospace', cursor:'pointer' }}>По цене</Typography>
    </div>
  </div>);
};
