import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    makeStyles,
    Grid,
  } from "@material-ui/core";
import SideBar from './sidebar/SideBar';
import Task from './task/Task';
import Trends from './trends/Trends';
  const useStyles = makeStyles((theme) => ({
      container: {
          backgroundColor: '#bfbfbf',
          padding: '10px 10px',
          border: '2px solid #1ec0e8',
          borderLeftStyle: 'none',
          borderRightStyle: 'none',
      },
  }));


const Dashboard = () => {
    const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.container}>
      <Grid item md={2} xs={0} sm={0}>
        <SideBar className={classes.sideBar} />
      </Grid>
      <Grid item xs={12} md={5} sm={12}>
        <Task />
      </Grid>
      <Grid item xs={12} md={5} sm={12}>
        <Trends />
      </Grid>
    </Grid>
  )
}

export default Dashboard
