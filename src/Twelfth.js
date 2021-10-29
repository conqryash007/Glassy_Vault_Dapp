import React from 'react' ;
import Navbar from './Navbar.js';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles ((theme)=>({
    root : {
       marginTop : '100px',
    },
})) ;



const Twelfth = () => {
    const classes = useStyles();  
    return (
        <div>
        <Navbar/>
        <div className = {classes.root}>
        <h1> this is 12th page </h1>
        </div>
        
        </div>
    )
}

export default Twelfth ; 
