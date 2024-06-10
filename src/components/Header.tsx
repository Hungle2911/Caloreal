import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <DinnerDiningIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Caloreal
          </Typography>
          <Button color="inherit" variant="outlined" sx={{ mr: 1 }}>
            Set Daily Limit
          </Button>
          <Button color="inherit" variant="outlined">
            Reset Day
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
