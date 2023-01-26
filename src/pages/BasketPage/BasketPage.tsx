import { Typography, Box, Container } from "@mui/material";
import React from "react";
import { BasketItem } from "../../components/BasketItem/BasketItem";
import { useAppSelector } from "../../hooks/redux";
import { selectBasketItems } from "../../store/basket/BasketSelector";
import { Link } from 'react-router-dom';


export const BasketPage: React.FC = () => {
  const pizza = useAppSelector(selectBasketItems());
  console.log(pizza)
  return (
    <>
    <span>Корзина</span>
    <span>Очистить корзину</span>
    {pizza.map( pizza => (
     <BasketItem post = {pizza}/>
    ))}
       <Link to="/" className="button button--outline button--add go-back-btn">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 13L1 6.93015L6.86175 1"
                  stroke="#D3D3D3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
              </svg>

              <span>Вернуться назад</span>
            </Link>
    </>
  );
};