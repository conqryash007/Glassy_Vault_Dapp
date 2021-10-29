import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles ((theme)=>({
     
    root : {
      marginLeft : "50px",
      marginTop :  "50px",
      background : "rgba(0,0,0,0.5)" ,
  },
  
  
      container : {
        fontFamily : 'Nunito' ,
        fontSize : '2rem' ,
        fontWeight : 'bold' ,
      },
      
  
  
  })) ;

const TenthEnrollCard = () => {
    const classes = useStyles();  
    return (
        <div>
           <Card sx={{ maxWidth: 345 }}  className = {classes.root} >
           <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="./asset/f.png" 
          alt="green iguana"
        />
        <CardContent  >
          <Typography gutterBottom variant="h5" component="div" className = {classes.container}>
          ✍️ 10th Class Grade Form
          </Typography>
          <Typography variant="body2" color="text.secondary" className = {classes.container} >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> 
          <Button color = "secondary" href = '/tenthenrollform'> GET STARTED </Button>
        </CardContent>
      </CardActionArea>
    </Card>
        
            
        </div>
    )
}

export default TenthEnrollCard
