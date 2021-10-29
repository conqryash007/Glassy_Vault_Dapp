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

const SchoolForm = () => {
    const classes = useStyles(); 
    return (
        <div className = {classes.root}>
            <Navbar/>
            <div  className = {classes.form} >
            <Title>School Registration Form </Title>
           
            </div>

            <Card className = {classes.insert} >
                <CardContent>
                <form>
                    <Grid container spacing = {1}  >

                    <Grid xs= {12} sm ={6}  item >
                        <TextField label = "Name of the School" placeholder = "Enter the name of the School" variant = 'outlined' fullWidth required />
                    </Grid>

                    <Grid xs= {12} sm ={6}  item >
                        <TextField label = "Address of the School" placeholder = "Enter the address of the School" variant = 'outlined' fullWidth required />
                    </Grid>

                    <Grid xs= {12}   item >
                        <TextField type = 'email' label = "Email Address of the School" placeholder = "Enter the Email Address of the School" variant = 'outlined' fullWidth required />
                    </Grid>

                    <Grid xs= {12}   item >
                        <TextField type = 'number' label = "Contact No of the School" placeholder = "Enter the Contact No of the School" variant = 'outlined' fullWidth required />
                    </Grid>

                    <Grid xs= {12}   item >
                        <TextField type = 'number' label = "Registration No of the School" placeholder = "Enter the Registration No of the School" variant = 'outlined' fullWidth required />
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

export default SchoolForm
