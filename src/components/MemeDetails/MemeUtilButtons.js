import React from 'react';
import { Container, Typography, Button, IconButton } from '@material-ui/core';
// Icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
// img asset
import DiscordImg from '../../constants/img/discord.png';

function DiscordIcon() {
  return <img src={DiscordImg} style={{height: 24, width: 24}} alt="Discord icon" />
}

export default function MemeUtilButtons() {
  return (
    <Container>
      <Button variant="contained" color="primary">
        <FavoriteIcon style={{marginRight: 8}} />
        Favorite
      </Button>
      <br />
      <br />
      <Typography variant="h5" gutterBottom>
        Share It
      </Typography>
      <div>
        <IconButton aria-label="delete" color="primary">
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DiscordIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <TwitterIcon />
        </IconButton>
      </div>
    </Container>
  )
}