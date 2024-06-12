import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";

const Stats = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card sx={{ height: 100 }}>
            <CardContent>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <Typography variant="h5" fontWeight={700}>
                  2000
                </Typography>
                <Typography variant="h6">Daily Calorie Limit</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ height: 100 }}>
            <CardContent>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <Typography variant="h5" fontWeight={700}>
                  2000
                </Typography>
                <Typography variant="h6">Calories Remaining</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ height: 100 }}>
            <CardContent>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <Typography variant="h5" fontWeight={700}>
                  200
                </Typography>
                <Typography variant="h6">Gain/Loss</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ height: 100 }}>
            <CardContent>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <Typography variant="h5" fontWeight={700}>
                  200
                </Typography>
                <Typography variant="h6">Calories Consumed</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ height: 100 }}>
            <CardContent>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <Typography variant="h5" fontWeight={700}>
                  200
                </Typography>
                <Typography variant="h6">Calories Burned</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <LinearProgress
        variant="determinate"
        sx={{ height: 15, mt: 2, borderRadius: 30 }}
      />
    </>
  );
};

export default Stats;
