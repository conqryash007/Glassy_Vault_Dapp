import React from 'react' ;
import Navbar from './Navbar.js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const useStyles = makeStyles ((theme)=>({

    main : {
       backgroundColor : '#AEB6BF ' ,
       backgroundImage : `url(${process.env.PUBLIC_URL + "/asset/d.jpg " })`  ,
       minHeight : '200vh',
    },
       root : {
       justifyContent : 'center',
       alignItems : 'center',
       display : 'flex',
       flexWrap: 'wrap',
       '& > *': {
         margin: theme.spacing(1),
         width: theme.spacing(16),
         height: theme.spacing(16),
       },
    },

    grid : {
        width : '100%',
        margin : '0px',
        justifyContent : 'center',
        alignItems : 'center',
        display : 'flex',

    },

    paper : {
        marginInlineStart : '100px',
        marginTop : '100px',
        padding : theme.spacing(10),
        backgroundColor : "#1976d2",
        
        

    },
    paper2 : {
      marginInlineStart : '100px',
      marginTop : '100px',
      padding : theme.spacing(10),
      backgroundColor : "#ffb74d",

  },
  paper3 : {
      marginInlineStart : '100px',
      marginTop : '100px',
      padding : theme.spacing(10),
      backgroundColor : "#f44336",

  },

paper4 : {
    marginInlineStart : '100px',
    marginTop : '100px',
    padding : theme.spacing(10),
    backgroundColor : "#4caf50",

},

paper5: {
    marginInlineStart : '100px',
    marginTop : '100px',
    padding : theme.spacing(10),
    backgroundColor : "#e33371",

},

paper6 : {
    marginInlineStart : '100px',
    marginTop : '100px',
    padding : theme.spacing(10),
    backgroundColor : "#64b5f6",
},

  text:{
    color:"#ffffff",
    minwidth : '200%',
    justifyContent : 'space-evenly' ,
},

title : {
    justifyContent : 'center',
    alignItems : 'center',
   marginTop : '90px',
   display: 'flex',
   flexWrap: 'wrap',
   color:"#ffffff",
},

})) ;

const SchoolList = () => {
    const classes = useStyles();  
    return (
        <div className = {classes.main}  >
            <Navbar/>
             <div className = {classes.title} >
             <h1> 🏠 List Of Schools </h1>
             </div>
            

            <div className = {classes.root} >
            <Grid container spacing = {3} className = {classes.grid} >
            <Grid item >
            <div className={classes.root}>
            <Paper elevation={20} className = {classes.paper} md={4} >
            <Typography align="center" className={classes.text}  component="p" variant="h5" >
              LR.DAV SCHOOL
            </Typography>
            <Button  variant="contained" href="/studentlist" >VIEW STUDENTS</Button>
            </Paper>  

            <Paper elevation={20} className = {classes.paper2} md={4} >
            <Typography align="center" className={classes.text} component="p" variant="h5" >
            SCB MEDICAL SCHOOL
            </Typography>
            <Button variant="contained" href="/studentlist" >VIEW STUDENTS</Button>
            </Paper> 

            <Paper elevation={20} className = {classes.paper3} md={4} >
            <Typography align="center" className={classes.text} component="p" variant="h5" >
            KENDRIYA VIDYALAYA BBSR 
            </Typography>
            <Button variant="contained" href="/studentlist" >VIEW STUDENTS</Button>
            </Paper> 

            <Paper elevation={20} className = {classes.paper4} md={4} >
            <Typography align="center" className={classes.text} component="p" variant="h5" fullWidth >
            IRISH SCHOOL
            </Typography>
            <Button variant="contained" href="/studentlist" fullWidth >VIEW STUDENTS</Button>
            </Paper> 

            <Paper elevation={20} className = {classes.paper5} md={4} >
            <Typography align="center" className={classes.text} component="p" variant="h5"  >
            LOYLA SCHOOL
            </Typography>
            <Button  variant="contained" href="/studentlist" >VIEW STUDENTS</Button>
            </Paper> 

            <Paper elevation={20} className = {classes.paper6} md={4} >
            <Typography align="center" className={classes.text} component="p" variant="h5" >
            DELHI PUBLIC SCHOOL
            </Typography>
            <Button  variant="contained" href="/studentlist" >VIEW STUDENTS</Button>
            </Paper> 

            

            </div>
            </Grid>
        </Grid>   

        </div>    
            
        </div>
    )
}

export default SchoolList ;
