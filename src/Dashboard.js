import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import Grid from '@material-ui/core/Grid';

import TwelfthEnrollCard from './TwelfthEnrollCard';
import TenthEnrollCard from './TenthEnrollCard';
import StudentEnrollCard from './StudentEnrollCard';

const useStyles = makeStyles ((theme)=>({
    main : {
         justifyContent : 'center',
    },

    root : {
        marginTop : '2px' ,
        justifyContent : 'center',
       alignItems : 'center',
       display : 'flex',
       flexWrap: 'wrap',
   

},

    title : {
        marginTop : '90px' ,
        justifyContent : 'center',
        alignItems : 'center',
        display : 'flex',
        flexWrap: 'wrap',
    },

grid : {
    width : '100%',
    margin : '0px',
    justifyContent : 'center',
    alignItems : 'center',
    display : 'flex',

},

})) ;

const Dashboard = () => {
    const classes = useStyles();  
    return (
        <div className = {classes.main}>
            
            <Navbar/>
            
            <div className = {classes.title}>
            <h1>📝 DASHBOARD</h1>
            </div>

            <div className = {classes.root} >
            <Grid container spacing = {3} className = {classes.grid} >
            <Grid item >
            <div className={classes.root}>
            
            <StudentEnrollCard md={12} />

            <TenthEnrollCard md={12} />
             
            <TwelfthEnrollCard md={12} />

            
            

            </div>
            </Grid>
        </Grid>   

        </div>    
            
        </div>
    )
}

export default Dashboard ;
