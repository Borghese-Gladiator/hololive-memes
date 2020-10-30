import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
// Card
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
// AboutRoles Icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const cardUseStyles = makeStyles((theme) => ({
  root: {
    width: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    objectFit: "cover"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  headerColor: {
    color: "#355C7D",
  },
  listItemCenter: {
    textAlign: "center"
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  flexRowItem: {
    flex: "1 1 auto",
    margin: "5px"
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function RecipeCard(props) {
  const classes = cardUseStyles();
  const { name, imgPath, starsNum, tags, ingredients, desc, user } = props
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Generate list items with dividers
  const listItems = tags.map((val, idx) => {
    return (
      <Typography key={`${val} ${idx}`} color="textPrimary" className={classes.flexRowItem}>
        {val}
      </Typography>
    )
  })
  const listItemsWithDividers = [];
  listItems.forEach((item, index) => {
    listItemsWithDividers.push(item)
    if (listItems[index + 1] !== undefined) {
      listItemsWithDividers.push(<Divider key={`Divider: ${index}`} className={classes.divider} orientation="vertical" />)
    }
  })

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`${process.env.PUBLIC_URL}/${imgPath}`}
        title={name}
      />
      <CardContent>
        <Typography variant="h6">
          {name}
        </Typography>
        <Rating name="read-only" value={starsNum} readOnly />
        <Typography variant="caption" display="block" style={{textAlign:"left"}}>
          By <strong><u>{user}</u></strong>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div className={classes.flexRow}>
            {listItemsWithDividers}
          </div>
          <br />
          <Typography variant="h6">
            Ingredients
          </Typography>
          <List dense={true}>
            {ingredients.map((value, idx) => {
              return (
                <ListItem key={`${value} ${idx}`}>
                  <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                  <ListItemText
                    disableTypography
                    primary={<Typography variant="subtitle1">{value}</Typography>}
                  />
                </ListItem>
              )
            })}
          </List>
          <Typography variant="body">
            {desc}
          </Typography>
          <div style={{textAlign:"center"}}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}