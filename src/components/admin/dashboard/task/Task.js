import React from 'react';
import {
    Typography,
    Box,
    makeStyles,
    Card,
    Divider
  } from "@material-ui/core";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#f3efef",
        marginLeft: '1rem',
        "@media only screen and (max-width: 600px)": {
            marginLeft: '0px',
        },
        "@media only screen and (max-width: 1200px)": {
            marginLeft: '0px',
        },
    },
    title: {
        backgroundColor: "#fff",
        padding: "10px 20px",
    },
    heading: {
        fontFamily: "Arial Black",
        fontSize: "20px",
        color: "#16abd0",
        "@media only screen and (max-width: 600px)": {
            fontSize: "18px",
        }
    },
    tabs: {
        display: 'flex',
    },
    arrowBack: {
        color: '#999999',
        marginTop: '.8rem',
    },
    arrowForward: {
        color: '#999999',
        marginTop: '.8rem',
        marginLeft: '2rem',
    },
    divider: {
        backgroundColor:'#16abd0',
        marginRight: '21rem',
        marginLeft: '3rem'
    },
    card: {
        padding: "15px 10px",
    },
    container1: {
        backgroundColor: '#fff',
        height: "290px",
        "@media only screen and (max-width: 600px)": {
            height: '200px'
        }
    },
    container2: {
        backgroundColor: "#fff",
        height: "175px",
       marginTop: ".8rem",
       "@media only screen and (max-width: 600px)": {
            height: '160px'
        }
    },
}))

const Task = () => {
    const classes = useStyles();
  return (
    <div>
       <Card className={classes.container}>
            <Box className={classes.title}> 
                <Typography className={classes.heading}>Tasks</Typography>
                <Box className={classes.tabs}>
                    <ArrowBackIosIcon fontSize='small' className={classes.arrowBack} />
                    <Tabs
                        textColor="success"
                        indicatorColor="success"
                    >
                        <Tab
                        style={{ fontFamily: "Arial Black", color: "#16abd0" }}
                        value="one"
                        label="Daily"
                        />
                        <Tab
                        style={{ fontFamily: "Arial Black" }}
                        value="two"
                        label="Pending"
                        />
                        <Tab
                        style={{ fontFamily: "Arial Black" }}
                        value="three"
                        label="Monthly"
                        />
                    </Tabs>
                    <ArrowForwardIosIcon fontSize='small' className={classes.arrowForward} />
                </Box>
            </Box>

            <Divider className={classes.divider} />

            <Box className={classes.card}>
                <Card className={classes.container1}></Card>
                <Card className={classes.container2}></Card>
            </Box>
       </Card>
    </div>
  )
}

export default Task
