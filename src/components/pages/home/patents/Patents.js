import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Title from "../SectionTitle.js";
import { patentsContent } from "../../../../data/patentsContent.tsx";

import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

const Lightbox = React.lazy(() =>
  import("yet-another-react-lightbox").then((module) => ({
    default: module.Lightbox,
  }))
);

const Patents = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const slides = patentsContent.map((patent) => ({
    src: patent.image,
    title: patent.title,
    description: patent.description,
  }));

  const openLightbox = (slideIndex) => {
    setIndex(slideIndex);
    setModalOpen(true);
  };

  const renderNext = slides.length > 1;
  const renderPrev = renderNext;

  return (
    <Container id="patents">
      <Title title="Patents" />
      <Lightbox
        open={modalOpen}
        close={() => setModalOpen(false)}
        slides={slides}
        index={index}
        plugins={[Captions, Counter, Fullscreen, Zoom]}
        on={{ view: ({ index: current }) => setIndex(current) }}
        render={{
          buttonPrev: renderPrev ? undefined : () => null,
          buttonNext: renderNext ? undefined : () => null,
        }}
      />
      <Grid container spacing={3} justifyContent="center">
        {patentsContent.map((patent, patentIndex) => (
          <Grid item xs={12} sm={6} md={4} key={patent.id}>
            <Card sx={{ maxWidth: 345, margin: "auto" }}>
              <CardMedia
                component="img"
                height="200"
                image={patent.image}
                alt={patent.title}
                sx={{ objectFit: "contain", padding: "10px", cursor: "pointer" }}
                onClick={() => openLightbox(patentIndex)}
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