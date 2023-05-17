import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    makeStyles,
    Card,
    Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#f3efef',
        // width: '520px',
        height: '290px',
    },
    title: {
        padding: '15px 15px',
        color: '#16abd0',
        backgroundColor: '#fff',
    },
    heading: {
        fontFamily: 'Arial Black',
        fontSize: '20px',
    },
    container2: {
        backgroundColor: '#f3efef',
        // width: '520px',
        height: '305px',
        marginTop: '.8rem'
    },
}));

const Trends = () => {
    const classes = useStyles();
  return (
    <div>
      <Card className={classes.container}>
        <Box className={classes.title}>
            <Typography className={classes.heading}>Trends</Typography>
        </Box>
      </Card>
      <Card className={classes.container2}>
           <Box className={classes.title}>
             <Typography className={classes.heading}>Efficiency</Typography>
           </Box>
     </Card>
    </div>
  )
}

export default Trends
