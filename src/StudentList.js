import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { Button, Card } from '@material-ui/core';
import Navbar from './Navbar';


function createData(id, Sl, name,gender,dob ,state,caste, tenth, twelfth) {
  return { id, Sl, name, state, gender,dob,caste ,tenth, twelfth};
}

const rows = [
  createData(0, '1', 'Satyajit Pal','MALE','25/11/01', 'West Bengal', 'GEN' ,'/tenth', '/twelfth'),
  createData(1, '2', 'Yash Gupta','MALE','05/08/01', 'Madhya Pradesh','GEN' ,'/tenth', '/twelfth'),
  createData(2, '3', 'Gursimran Kaur','MALE','24/12/02', 'Punjab', 'GEN','/tenth', '/twelfth'),
  createData(3, '4', 'Vaibhav Gupta','MALE','15/10/01', 'Haryana', 'SC','/tenth', '/twelfth'),
  createData(4, '5', 'Simran Pattnaik','FEMALE','04/09/03', 'Odisha','ST' ,'/tenth', '/twelfth'),
];



const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(5),
  },
  root : {
    marginTop: theme.spacing(15),
    marginLeft : '30px',
    marginRight : '30px',
  },
  table : {
     backgroundColor : "#4DD0E1",
  },
}));

 function StudentList () {
  const classes = useStyles();
  return (
    <React.Fragment>
    <Navbar/>
    <div className = {classes.root} >
      <Title align = 'center' >STUDENTS IN YOUR SCHOOL</Title>
      <Card>
      <Table size="small" elevation = {20} >
        <TableHead>
          <TableRow className = {classes.table} >
            <TableCell elevation = {20}  >Sl no.</TableCell>
            <TableCell elevation = {20}>Name</TableCell>
            <TableCell elevation = {20}>Gender</TableCell>
            <TableCell elevation = {20}>D.O.B</TableCell>
            <TableCell elevation = {20}>State</TableCell>
            <TableCell elevation = {20}>Caste</TableCell>
            <TableCell elevation = {20}>Class 10th Marksheet</TableCell>
            <TableCell elevation = {20} align="right">Class 12th Marksheet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.Sl}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.dob}</TableCell>
              <TableCell>{row.state}</TableCell>
              <TableCell>{row.caste} </TableCell>
              <TableCell><Button color="primary" href = {row.tenth} >📚</Button></TableCell>
              <TableCell align="right"><Button color="primary" href = {row.twelfth}>📚</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
      </Card>

      
      <div className={classes.seeMore}>
        <Button color="primary" variant= 'contained' href='/dashboard' >
          ADD MORE STUDENTS
        </Button>
      </div>
      </div>
    </React.Fragment>
  );
}

export default StudentList ;
