import React from 'react';
import { Container, Typography } from '@material-ui/core';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import FavoriteIcon from '@material-ui/icons/Favorite';
import LinkIcon from '@material-ui/icons/Link';

import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import DiscordImg from '../../constants/img/discord.png';

function DiscordIcon() {
  return <img src={DiscordImg} style={{height: 24, width: 24}} alt="Discord icon" />
}

export default function MemeUtilButtons() {
  return (
    <Container>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Favorite" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LinkIcon />
          </ListItemIcon>
          <ListItemText primary="Copy Link" />
        </ListItem>
      </List>
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