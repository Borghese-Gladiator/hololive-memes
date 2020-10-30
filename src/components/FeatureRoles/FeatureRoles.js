import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// AboutRoles Container
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
// AboutRoles Card
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const cardUseStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    textAlign: "center"
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
  }
}));

function RecipeReviewCard(props) {
  const classes = cardUseStyles();
  const { title, icon, titleText, desc, useDesc, toolNamesList } = props

  return (
    <Card className={classes.root}>
      <IconButton aria-label="settings">
        {icon()}
      </IconButton>
      <CardHeader
        titleTypographyProps={{variant:'h4' }}
        title={titleText}
      />
      <CardContent>
        <Typography variant="subtitle1" component="p">
          {desc}
        </Typography>
        <br />
        <Typography variant="h6" className={classes.headerColor}>
          Things I enjoy building
        </Typography>
        <Typography variant="body">
          {useDesc}
        </Typography>
        <br />
        <br />
        <Typography variant="h6" className={classes.headerColor}>
          {title} Tools
        </Typography>
        <List dense={true} style={{paddingTop:0}}>
          {toolNamesList.map((value, idx) => {
            return (
              <ListItem key={`${value} ${idx}`} className={classes.listItemCenter}>
                <ListItemText
                  disableTypography
                  primary={<Typography variant="subtitle1">{value}</Typography>}
                />
              </ListItem>
            )
          })}
        </List>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "5vh",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function AboutRoles(props) {
  const classes = useStyles();
  const { id, aboutRolesData } = props

  return (
    <Container id={id} className={classes.root}>
      <Grid container justify="center" spacing={1}>
        {aboutRolesData.map((obj, idx) => (
          <Grid key={`${obj.title} ${idx}`} item xs={12} sm={6} md={4} lg={3}>
            <RecipeReviewCard
              title={obj.title}
              icon={obj.icon}
              titleText={obj.titleText}
              desc={obj.desc}
              useDesc={obj.useDesc}
              toolNamesList={obj.toolNamesList}
              style={{background: "#fff"}}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
