import React from "react";
// package to parse URLs and get root: www.reddit.com
// https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string
import psl from 'psl';
// Material UI components
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
// Material UI Icons
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// custom img assets
import RedditImg from '../../constants/img/reddit_black.png';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PixivImg from '../../constants/img/pixiv_icon.png';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2)
  },
  verticalAlignFlex: {
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    height: 20,
    marginRight: 10
  },
}));

function extractHostname(url) {
  let hostname;
  //find & remove protocol (http, ftp, etc.) and get hostname

  if (url.indexOf("//") > -1) {
    hostname = url.split('/')[2];
  }
  else {
    hostname = url.split('/')[0];
  }

  //find & remove port number
  hostname = hostname.split(':')[0];
  //find & remove "?"
  hostname = hostname.split('?')[0];

  return hostname;
}

export default function SocialExternalLink(props) {
  const classes = useStyles();
  function getWebsiteIcon(website) {
    switch (website) {
      case "youtube.com":
        return <YouTubeIcon style={{marginRight: 10}} />
      case "reddit.com":
        return <img src={RedditImg} className={classes.icon} alt="link icon" />
      case "pixiv.net":
        return <img src={PixivImg} className={classes.icon} alt="link icon" />
      case "twitter.com":
        return <TwitterIcon style={{marginRight: 10}} />
      default:
        return <ExitToAppIcon style={{marginRight: 10}} />
    }
  }
  const { fullURL } = props;
  const website = psl.get(extractHostname(fullURL)); // returns youtube.com
  return (
    <div className={classes.root}>
      <Link
        color="inherit"
        variant="body2"
        target="_blank"
        rel="noopener noreferrer"
        href={fullURL}
        className={classes.verticalAlignFlex}
      >
        { getWebsiteIcon(website) }
        <span style={{overflow:'auto'}}>{decodeURI(fullURL)}</span>
      </Link>
    </div>
  )
}
// decodeURI function shows decoded URL - so hexadecimal digits are conreted to Japanese