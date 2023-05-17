import React from 'react';
import {
    Typography,
    makeStyles,
  } from "@material-ui/core";

  const useStyles = makeStyles((theme) => ({
      heading: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#1ec0e8',
          fontWeight: 'bold',
          padding: '15px 0px',
          fontSize: '13px',
          fontFamily: ' Arial Black',
          // position: 'fixed',
          // bottom: 0,
          // left: 0,
      }
  }));

const Footer = () => {
    const classes = useStyles();
  return (
    <div>
      <Typography className={classes.heading}>
          Innovated By Farzan Mirza
      </Typography>
    </div>
  )
}

export default Footer
