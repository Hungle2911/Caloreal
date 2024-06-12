import {
  Autocomplete,
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import FoodItem from "./FoodItem";
import { useStatsContext } from "../contexts/StatsProvider";

const FilterMeal = () => {
  const options = ["Egg", "Rice"];
  const { dispatch } = useStatsContext();
  const addCalorie = () => {
    dispatch({ type: "ADD_CALORIE_ENTRY" });
  };
  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          sx={{ width: "100%", mb: 2 }}
          renderInput={(params) => <TextField {...params} label="Food" />}
        />
        <Box display="flex" alignItems="center">
          <Typography
            variant="h5"
            sx={{
              borderLeft: 3,
              borderColor: "primary.main",
              padding: 2,
            }}
          >
            Meals / Food Items
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{
              marginLeft: "auto",
              fontWeight: "bold",
              paddingY: 2,
              paddingX: 3,
              height: "100%",
            }}
            onClick={addCalorie}
          >
            Add Meal
          </Button>
        </Box>
        <Stack>
          <FoodItem />
          <FoodItem />
        </Stack>
      </Container>
    </>
  );
};

export default FilterMeal;
