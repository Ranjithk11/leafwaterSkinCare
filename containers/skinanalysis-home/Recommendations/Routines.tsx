import { Box, Container, Grid, Typography, styled } from "@mui/material";
import React from "react";
const StyledDietCharWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: 75,
  paddingBottom: 75,
  backgroundColor: theme.palette.common.white,

  "& .image_wrapper": {
    width: "100%",
    height: "300px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  "& .MuiTypography-h5": {
    fontWeight: 800,
    textTransform: "uppercase",
    color: theme.palette.grey[500],
    fontSize: 30,
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      fontSize: 20,
    },
    [theme.breakpoints.only("sm")]: {
      textAlign: "center",
      fontSize: 25,
    },
  },
  "& .MuiTypography-h2": {
    fontWeight: 800,
    //textTransform: "uppercase",
    color: theme.palette.common.white,
    fontSize: 30,
  },
  "& .MuiTypography-h6": {
    fontWeight: 800,
    textTransform: "uppercase",
    marginTop: 15,
  },
  "& .MuiTypography-h3": {
    fontWeight: 800,
    [theme.breakpoints.only("xs")]: {
      fontSize: 35,
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 45,
    },
  },
  "& span": {
    color: theme.palette.primary.main,
    marginRight: 10,
  },
}));

const Routine = () => {
  return (
    <StyledDietCharWrapper>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Box mb={8}>
              <Typography gutterBottom textAlign="center" variant="h5">
                Recommended
              </Typography>
              <Typography textAlign="center" variant="h3">
                <span>Daily</span>Routine
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12}>
            <Box
              sx={{
                backgroundColor: "#dcf0fa",
                borderRadius: 5,
                height: "100%",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <Grid container alignItems="stretch">
                <Grid item xs={12} sm={5}>
                  <Box
                    component="div"
                    className="image_wrapper"
                    sx={{
                      backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpsXzIfypJ4Ahn7DyNv_268NAxwjfERHqBa5SKkhx-Vypw9tmFpOez6nat-Lzt_aJTAI&usqp=CAU)`,
                    }}
                  ></Box>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Box p={3}>
                    <Typography
                      variant="h2"
                      gutterBottom
                      color="white"
                      textAlign="left"
                      style={{ color: "black" }}
                    >
                      Morning
                    </Typography>
                    <Box pt={2}>
                      <Grid
                        container
                        alignItems="center"
                        spacing={1}
                        justifyContent="center"
                      >
                        <Grid
                          container
                          item
                          xs={12}
                          alignContent="center"
                          spacing={2}
                        >
                          <Grid item>
                            <img
                              width={25}
                              height={25}
                              src="/icons/accept.png"
                            />
                          </Grid>
                          <Grid item xs>
                            <Typography variant="subtitle2">
                              Face wash and cleansing
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={12}
                          alignContent="center"
                          spacing={2}
                        >
                          <Grid item>
                            <img width={25} src="/icons/accept.png" />
                          </Grid>
                          <Grid item xs>
                            <Typography variant="subtitle2">Toner</Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={12}
                          alignContent="center"
                          spacing={2}
                        >
                          <Grid item>
                            <img width={25} src="/icons/accept.png" />
                          </Grid>
                          <Grid item xs>
                            <Typography variant="subtitle2">
                              Day Cream
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={12}
                          alignContent="center"
                          spacing={2}
                        >
                          <Grid item>
                            <img width={25} src="/icons/accept.png" />
                          </Grid>
                          <Grid item xs>
                            <Typography variant="subtitle2">
                              Sunscreen
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                backgroundColor: "#212121",
                borderRadius: 5,
                height: "100%",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <Grid container alignItems="stretch">
                <Grid item xs={12} sm={5}>
                  <Box
                    component="div"
                    className="image_wrapper"
                    sx={{
                      backgroundImage: `url(https://miro.medium.com/v2/resize:fit:1400/format:webp/1*nGa0pQ1jfxzrSTEVYWPlOw.jpeg)`,
                    }}
                  ></Box>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Box p={3}>
                    <Typography
                      variant="h2"
                      gutterBottom
                      color="white"
                      textAlign="left"
                    >
                      Night
                    </Typography>
                    <Box pt={2}>
                      <Grid
                        container
                        alignItems="center"
                        spacing={1}
                        justifyContent="center"
                      >
                        <Grid
                          container
                          item
                          xs={12}
                          alignContent="center"
                          spacing={2}
                        >
                          <Grid item>
                            <img width={25} src="/icons/accept.png" />
                          </Grid>
                          <Grid item xs>
                            <Typography color="white" variant="subtitle2">
                              Cleanser
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={12}
                          alignContent="center"
                          spacing={2}
                        >
                          <Grid item>
                            <img width={25} src="/icons/accept.png" />
                          </Grid>
                          <Grid item xs>
                            <Typography color="white" variant="subtitle2">
                              Facial Scrub
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={12}
                          alignContent="center"
                          spacing={2}
                        >
                          <Grid item>
                            <img width={25} src="/icons/accept.png" />
                          </Grid>
                          <Grid item xs>
                            <Typography color="white" variant="subtitle2">
                              Toner
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={12}
                          alignContent="center"
                          spacing={2}
                        >
                          <Grid item>
                            <img width={25} src="/icons/accept.png" />
                          </Grid>
                          <Grid item xs>
                            <Typography color="white" variant="subtitle2">
                              Serums
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledDietCharWrapper>
  );
};

export default Routine;