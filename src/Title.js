import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles  } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({

  root : {
      marginTop : '20px',
  },

}));


function Title(props) {
  const classes = useStyles();
  return (
    <Typography  component="h2" variant="h5" color="primary" gutterBottom className = {classes.root}>
      {props.children}
    </Typography>
 
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title ; 