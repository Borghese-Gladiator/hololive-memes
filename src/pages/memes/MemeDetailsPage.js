import React from "react";
import { useParams } from "react-router-dom";
// Material UI components
import Container from '@material-ui/core/Container'

export default function MemeDetailsPage() {
  let { memeId } = useParams();
  return (
    <Container>
      <h1>Requested Meme ID: {memeId}</h1>
    </Container>
  );
}