import React from "react";
import { IPizza } from "../../models/IPizza";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { selectBasketItems } from "../../store/basket/BasketSelector";
import { basketSlice } from "../../store/basket/BasketSlice";
import styles from "./styles.module.scss";
import { selectCartItemById } from "../../store/basket/BasketSelector";

interface PostItemProps {
    post: IPizza;
  }

  
export const BasketItem: React.FC<PostItemProps> = ({post}) => {
    const { add, minus } = basketSlice.actions;
    const dispatch = useAppDispatch();
    const basketItem = useAppSelector(selectCartItemById(post.id));
    const count = basketItem ? basketItem.count : '';

    function addCount(){
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
    
      function minusCount(){
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
  return (<div className={styles.cart__item}>
  <div className={styles.img}> 
    <img alt={post.name} src={post.image}></img>
  </div>
  <div className={styles.info}> 
    {post.description}
  </div>
  <div className={styles.count}> 
    <span onClick={minusCount}>minus</span>{post.count}<span onClick={addCount}>plus</span>
  </div>
  <div  className={styles.price} > 
    {post.price * post.count}
  </div>
  </div>);
};
