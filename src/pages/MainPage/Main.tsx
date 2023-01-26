import React from "react";
import Pagination from "@mui/material/Pagination";
import { pizzaApi } from "../../services/pizzaService";
import { PizzaItem } from "../../components/PizzaItem/PizzaItem";
import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import { Grid,  } from "@mui/material";
import { MenuHeader } from "../../components/MenuHeader/MenuHeader";


export const MainPage: React.FC = () => {
  const LIMIT = 9;
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState({ limit: LIMIT, page: 1 });
  const { data, isLoading, isSuccess } = pizzaApi.useGetAllPizzaQuery(query);
  const totalLength = data?.count || 1;
  const totalPages = Math.ceil(totalLength / LIMIT);

  useEffect(() => {
    setQuery({ limit: LIMIT, page: page });
  }, [page]);

  const handlePaginationClick = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  
  if(isLoading) return <><span>Загрузка</span></>
  return (
    <Container sx={{ mt: "2rem", mb: "1rem" }}>
      { isLoading && <span>Загрузка</span>}
      <MenuHeader/>
      <Grid container spacing={5} sx={{ mt: "0.5rem", mb: "1rem" }} >
        {data?.items.map((post) => (
          <PizzaItem key={post.id} post={post} />
        ))}
      </Grid>
      <Pagination
        size={"large"}
        sx={{ mt: "2rem", display: 'flex', justifyContent: 'center' }}
        count={totalPages}
        page={page}
        onChange={handlePaginationClick}
      />
    </Container>
  );
};
