import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.js";
import { makeStyles } from "@material-ui/core/styles";
import compiledSchool from "./ethereum/build/School.json";
import { useParams, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "100px",
  },
  headings: {
    textAlign: "center",
  },
  table_details: {
    margin: "10px auto",
    textAlign: "center",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1)",
  },
  table_marks: {
    width: "80vw",
    height: "80vh",
    margin: "40px auto",
    border: "2px solid black",
    textAlign: "center",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1)",
  },
  ele_head: {
    width: "15vw",
    margin: "10px 0px",
    padding: "20px 20px",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1)",
  },
  ele_data: {
    width: "15vw",
    margin: "10px 0px",
    padding: "20px 20px",
  },
  btn: {
    width: "150px",
    margin: "20px 40vw",
    padding: "15px 15px",
    backgroundColor: "lightblue",
  },
}));

const ReportCard = (props) => {
  const classes = useStyles();
  let [web3] = useState(props.web3);
  let [stu, setStu] = useState({});
  let val = useParams();
  useEffect(() => {
    const call = async () => {
      try {
        const instance = new web3.eth.Contract(compiledSchool.abi, val.address);
        const stud = await instance.methods.findStudent(val.id).call();
        setStu(stud);
        console.log(stu);
      } catch (err) {
        console.log(err.message);
      }
    };
    if (web3) {
      call();
    }
  }, [web3]);

  const giveTable = (eve) => {
    try {
      if (stu.first[eve] > 0) {
        return (
          <tr>
            <th className={classes.ele_head}>{eve.toUpperCase()}</th>
            <td className={classes.ele_head}>{stu.first[eve]}</td>
          </tr>
        );
      } else {
        return null;
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className={classes.headings + " " + classes.root}>Report Card</h1>
      <h2 className={classes.headings}>Class : 10</h2>

      <table className={classes.table_details}>
        <div className={classes.student_data}>
          <tr>
            <th className={classes.ele_head}>Name:</th>
            <td className={classes.ele_head}>{stu.name}</td>
          </tr>
          <tr>
            <th className={classes.ele_head}>Roll id:</th>
            <td className={classes.ele_head}>{stu.id}</td>
          </tr>
          <tr>
            <th className={classes.ele_head}> Father's Name:</th>
            <td className={classes.ele_head}>{stu.fathersName}</td>
          </tr>
          <tr>
            <th className={classes.ele_head}>Mother's Name:</th>
            <td className={classes.ele_head}>{stu.mothersName}</td>
          </tr>
        </div>
      </table>

      <table className={classes.table_marks}>
        <tr>
          <th className={classes.ele_head}>Subject</th>
          <th className={classes.ele_head}>Marks</th>
        </tr>
        {giveTable("maths")}
        {giveTable("socials")}
        {giveTable("science")}
        {giveTable("english")}
        {giveTable("hindi")}
      </table>
      <Link to={`/studentlist/${val.address}`}>
        <button className={classes.btn}>Go Back</button>
      </Link>
    </div>
  );
};

export default ReportCard;
