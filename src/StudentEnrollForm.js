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

const SchoolEnrollForm = () => {
    const classes = useStyles(); 
    return (
        <div className = {classes.root}>
            <Navbar/>
            <div  className = {classes.form} >
            <Title>Student Registration Form </Title>
           
            </div>

            <Card className = {classes.insert} >
                <CardContent>
                <form>
                    <Grid container spacing = {1}  >

                    <Grid xs= {12} sm ={6}  item >
                        <TextField label = "Name " placeholder = "Enter your name " variant = 'outlined' fullWidth required />
                    </Grid>

                    <Grid xs= {12} sm ={6}  item >
                        <TextField label = "Gender" placeholder = "Enter your gender" variant = 'outlined' fullWidth required />
                    </Grid>

                    <Grid xs= {12}   item >
                        <TextField  label = "Father's Name" placeholder = "Enter Father's Name " variant = 'outlined' fullWidth required />
                    </Grid>

                    <Grid xs= {12}   item >
                        <TextField  label = "Mother's Name" placeholder = "Enter Mother's Name" variant = 'outlined' fullWidth required />
                    </Grid>

                    <Grid xs= {12}   item >
                        <TextField type = 'number' label = "Roll No." placeholder = "Enter your Roll No." variant = 'outlined' fullWidth required />
                    </Grid>

                    <Grid xs= {12}   item >
                        <TextField multiline rows = {3} label = "Message for querries" placeholder = "Enter your query here" variant = 'outlined' fullWidth  />
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
}

export default SchoolEnrollForm

