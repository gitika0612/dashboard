import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import DiamondIcon from '@mui/icons-material/Diamond';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

const useStyles = makeStyles((theme) => ({
  navbar: {
    background: "#fff",
  },
  logo: {
    color: "#1ec0e8",
    "@media only screen and (max-width: 600px)": {
      display: 'flex',
      flexGrow: 1
  }
  },
  search: {
    marginLeft: "2rem",
    "@media only screen and (max-width: 600px)": {
      display: 'none',
  }
  },
  searchIcon: {
    backgroundColor: "#1ec0e8",
    borderRadius: "5px",
    padding: '8px 10px',
  },
  heading: {
    marginLeft: '1rem',
    color: '#9dafb3',
    marginTop: '1.5rem',
    flexGrow: 1,
    "@media only screen and (max-width: 600px)": {
      display: 'none',
  }
  },
  endIcon: {
    color: '#000',
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Box className={classes.logo}>
            <TrackChangesIcon fontSize='large'/>
          </Box>
          <Box className={classes.search}>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <OutlinedInput
                size='small'
                placeholder='Search'
                endAdornment={<InputAdornment position="end"> <SearchIcon /> </InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
           </FormControl>
          </Box>
          <Box className={classes.heading}>
            <Typography variant='subtitle2'>Production &gt; Dying &gt; Recipes &gt; <span style={{color: '#555'}}>Cow</span> </Typography>
          </Box>
          <Box className={classes.endIcon}>
              <DiamondIcon fontSize='large'/>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
