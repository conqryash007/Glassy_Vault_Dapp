import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Navbar from './Navbar';
import { Button, Card, CardContent, Grid, TextField } from '@material-ui/core';

const useStyles = makeStyles ((theme)=>({
    root : {
        display : 'flex ' ,
        margin: theme.spacing(1),
    },
    form : {
        display : 'flex' ,
       lineHeight: '0',
        marginTop : '70px',
        justifyContent : 'center',
       
    },
    
    insert : {
        marginTop : '150px',
        minWidth : '600px',
        
        
    },

})) ;

function TenthEnrollForm  ()  {
    const classes = useStyles(); 
    return (
        <div className = {classes.root}>
            <Navbar/>
            <div  className = {classes.form} >
            <Title>10th Marks Form </Title>
           
            </div>

            <Card className = {classes.insert} >
                <CardContent>
                <form>
                    <Grid container spacing = {1}  >

                    <Grid xs= {12} sm ={6}  item >
                        <TextField label = "Name " placeholder = "Enter your name " variant = 'outlined' fullWidth required />
                    </Grid>

                    <Grid xs= {12} sm ={6}  item >
                        <TextField type = 'number' label = "Roll no." placeholder = "Enter your Roll no." variant = 'outlined' fullWidth required />
                    </Grid>

                    <Grid xs= {12}   item >
                        <TextField type = 'number' label = "Maths Score" placeholder = "Enter your Maths Score " variant = 'outlined' fullWidth required />
                    </Grid>

                    <Grid xs= {12}   item >
                        <TextField type = 'number' label = "Science Score" placeholder = "Enter your Science Score" variant = 'outlined' fullWidth required />
                    </Grid>

                    <Grid xs= {12}   item >
                        <TextField type = 'number' label = "Social Studies Score" placeholder = "Enter your Social Studies Score" variant = 'outlined' fullWidth required />
                    </Grid>

                    <Grid xs= {12}   item >
                        <TextField type = 'number' label = "Sanskrit/Hindi Score" placeholder = "Enter your Sanskrit/Hindi Score" variant = 'outlined' fullWidth required />
                    </Grid>

                    <Grid xs= {12}   item >
                        <TextField type = 'number' label = "English Score" placeholder = "Enter your English Score" variant = 'outlined' fullWidth required />
                    </Grid>

                    <Grid xs= {3}   item >
                        <Button type = 'submit' variant = 'contained' color ='primary' >SUBMIT</Button>
                    </Grid>

                    </Grid>
                   </form> 
                </CardContent>
            </Card>

             
        </div>
    )
} ;

export default TenthEnrollForm ;


