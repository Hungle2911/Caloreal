import { Card, Container, Grid } from "@mui/material";

const Stats = () => {
  return (
    <>
      <Container sx={{ mt: 5, bgcolor: "red", height: 500 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ height: 100 }}>Daily Calorie Limit</Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ height: 100 }}>Calories Remaining</Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ height: 100 }}>Gain/Loss</Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ height: 100 }}>Calories Consumed</Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ height: 100 }}>Calories Burned</Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Stats;
