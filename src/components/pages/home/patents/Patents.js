import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Title from "../SectionTitle.js";
import { patentsContent } from "../../../../data/patentsContent.tsx";

const Patents = () => {
  return (
    <Container id="patents">
      <Title title="Patents" />
      <Grid container spacing={3} justifyContent="center">
        {patentsContent.map((patent) => (
          <Grid item xs={12} sm={6} md={4} key={patent.id}>
            <Card sx={{ maxWidth: 345, margin: "auto" }}>
              <CardMedia
                component="img"
                height="200"
                image={patent.image}
                alt={patent.title}
                sx={{ objectFit: "contain", padding: "10px" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" style={{ fontWeight: "bold" }} component="div">
                  {patent.title}
                </Typography>
                
                <Typography variant="body1" color="text.secondary">
                  {patent.description}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {patent.patentNumber}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Patents;