import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const FoodItem = () => {
  return (
    <Card sx={{ my: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" sx={{ mx: 1 }}>
            Breakfast
          </Typography>
          <Box
            sx={{
              fontSize: "1.25rem",
              backgroundColor: "primary.main",
              color: "white",
              textAlign: "center",
              borderRadius: 2,
              px: 2,
            }}
          >
            350
          </Box>
          <IconButton size="small" sx={{ mx: 2 }}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FoodItem;
