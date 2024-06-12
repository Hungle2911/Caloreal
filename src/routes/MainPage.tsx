import { Container, Grid } from "@mui/material";
import FilterMeal from "../components/FilterMeal";
import Header from "../components/Header";
import Stats from "../components/Stats";

const MainPage = () => {
  return (
    <>
      <Header />
      <Container sx={{ mt: 5, height: 300 }}>
        <Stats />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilterMeal />
          </Grid>
          <Grid item xs={6}>
            <FilterMeal />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MainPage;
