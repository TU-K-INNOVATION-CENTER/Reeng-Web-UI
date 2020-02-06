import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
// import MaterialUIPickers from "./TimePicker";

var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();


const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 500,
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
      minWidth: 300,
    },
    marginBottom: '1em'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  time: {
      fontSize: 30
  },
  textField: {
    width: '30%'
  }
}));

export default function TimeCards() {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <DeleteIcon />
          </IconButton>
        }
        subheader={date}
        
      />

    
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p"
        className={classes.time}>
          <form className={classes.container} noValidate>
            <TextField
              id="time"
              type="time"
              defaultValue={time}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </form>
          {/* <MaterialUIPickers /> */}
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions> */}
      
    </Card>
  );
}