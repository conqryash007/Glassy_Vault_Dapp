import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import { Button, Card } from "@material-ui/core";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import compiledSchool from "./ethereum/build/School.json";

function createData(id, Sl, name, gender, dob, state, caste, tenth, twelfth) {
  return { id, Sl, name, state, gender, dob, caste, tenth, twelfth };
}

const rows = [
  createData(
    0,
    "1",
    "Satyajit Pal",
    "MALE",
    "25/11/01",
    "West Bengal",
    "GEN",
    "/tenth",
    "/twelfth"
  ),
  createData(
    1,
    "2",
    "Yash Gupta",
    "MALE",
    "05/08/01",
    "Madhya Pradesh",
    "GEN",
    "/tenth",
    "/twelfth"
  ),
  createData(
    2,
    "3",
    "Gursimran Kaur",
    "MALE",
    "24/12/02",
    "Punjab",
    "GEN",
    "/tenth",
    "/twelfth"
  ),
  createData(
    3,
    "4",
    "Vaibhav Gupta",
    "MALE",
    "15/10/01",
    "Haryana",
    "SC",
    "/tenth",
    "/twelfth"
  ),
  createData(
    4,
    "5",
    "Simran Pattnaik",
    "FEMALE",
    "04/09/03",
    "Odisha",
    "ST",
    "/tenth",
    "/twelfth"
  ),
];

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(5),
  },
  root: {
    marginTop: theme.spacing(15),
    marginLeft: "30px",
    marginRight: "30px",
  },
  table: {
    backgroundColor: "#4DD0E1",
  },
}));

function StudentList(props) {
  const schoolAddress = useParams();
  let [web3] = useState(props.web3);
  let [contract] = useState(props.contract);
  // let [arrId, setarrId] = useState([]);
  let [studentData, setstudentData] = useState([]);
  useEffect(() => {
    const call = async () => {
      try {
        // console.log(props, schoolAddress["address"]);
        const instance = new web3.eth.Contract(
          compiledSchool.abi,
          schoolAddress["address"]
        );
        const ids = await instance.methods.getAllIds().call();
        const stdData = await Promise.all(
          Array(parseInt(ids.length))
            .fill()
            .map((ele, i) => {
              return instance.methods.findStudent(ids[i]).call();
            })
        );
        setstudentData(stdData);
        console.log(ids, studentData, stdData);
      } catch (err) {
        console.log(err.message);
      }
    };
    if (typeof web3 != null && typeof contract != null) {
      call();
    }
  }, []);

  const classes = useStyles();
  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.root}>
        <Title align="center">STUDENTS IN YOUR SCHOOL</Title>
        <Card>
          <Table size="small" elevation={20}>
            <TableHead>
              <TableRow className={classes.table}>
                <TableCell elevation={20}>Roll ID</TableCell>
                <TableCell elevation={20}>Name</TableCell>
                <TableCell elevation={20}>Father's Name</TableCell>
                <TableCell elevation={20}>Mother's Name</TableCell>
                <TableCell elevation={20}>Caste</TableCell>
                <TableCell elevation={20}>Class 10th Marksheet</TableCell>
                <TableCell elevation={20}>Class 12th Marksheet</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.fathersName}</TableCell>
                  <TableCell>{row.mothersName}</TableCell>
                  <TableCell>{"GEN"} </TableCell>
                  <TableCell>
                    <Button
                      color="primary"
                      href={`/studentlist/${schoolAddress.address}/${row.id}/tenthReport`}
                    >
                      📚
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      color="primary"
                      href={`/studentlist/${schoolAddress.address}/${row.id}/twelthReport`}
                    >
                      📚
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <div className={classes.seeMore}>
          <Button
            color="primary"
            variant="contained"
            href={`/studentlist/${schoolAddress.address}/dashboard`}
          >
            ADD/EDIT STUDENTS DATA
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default StudentList;
