import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles ((theme)=>({
    container : {
      fontFamily : 'Nunito' ,
      fontSize : '2rem' ,
      fontWeight : 'bold' ,
      
    },

    root : {
        marginLeft : "100px",
        marginTop :  "50px", 
        fontFamily : 'Nunito' , 
        background : "rgba(0,0,0,0.5)" ,
    },

})) ;

 function School() {
    const classes = useStyles();  
  return (

    <Card sx={{ maxWidth: 345 }} className = {classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="./asset/c.jpg"
          alt="green iguana"
        />
        <CardContent  >
          <Typography gutterBottom variant="h5" component="div" className = {classes.container}>
            School Data WareHouse 
          </Typography>
          <Typography variant="body2" color="text.secondary" className = {classes.container} >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Button color = "secondary" href = '/schoollist' >SEE ALL SCHOOLS</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default School ;