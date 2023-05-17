import React from 'react';
import Card from '@mui/material/Card';
import {
    Typography,
    Box,
    makeStyles,
    Divider,
  } from "@material-ui/core";
import CloseIcon from '@mui/icons-material/Close';
import Person3Icon from '@mui/icons-material/Person3';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 4,
      top: 5,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
}));

const useStyles = makeStyles((theme) => ({
    container: {
        border: '2px solid #1ec0e8',
        backgroundColor: '#fff',
        padding: '5px 10px',
        width: '225px',
        "@media only screen and (max-width: 600px)": {
            display: 'none',
        },
        "@media only screen and (max-width: 1200px)": {
            display: 'none',
        }
    },
    crossIcon: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        color: '#bfbfbf',
    },
    subContainer: {
        padding: '10px 10px',
    },
    title: {
        display: 'flex',
        color: '#595959',
    },
    title2: {
      marginLeft:'1rem',
      fontWeight: '900',
      fontFamily: 'Arial Black',
      fontSize: '18px',
    },
    notifications: {
        display: 'flex',
        color: '#1ec0e8',
        marginTop: '.5rem',
    },
    notificationHeading: {
        marginLeft:'1rem',
        fontWeight: '900',
        fontFamily: 'Arial Black',
    },
    divider: {
        backgroundColor:'#1ec0e8',
        marginRight: '.5rem',
    },
    simpleDivider: {
        marginRight: '.5rem',
        marginTop: '.5rem'
    },
    subNotification: {
        display: 'flex',
        marginTop: '.5rem' 
    },
    subIcon: {
        color: '#1ec0e8'
    },
    subHeading: {
        color: '#8c8c8c',
        fontSize: '9px',
        fontWeight: 'bold',
        marginLeft: '1rem',
    },
    subHeading2: {
        color: '#1ec0e8',
        fontSize: '8px',
        marginLeft: '1rem',
    },
    all: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        color: '#999999',
    },
    allHeading: {
        fontSize: '10px',
        marginRight: '1rem'
    },
    home: {
        display: 'flex',
        color: '#595959',
        marginTop: '.5rem',
    },
    home2: {
      marginLeft:'1rem',
      fontWeight: '900',
      fontFamily: 'sans-serif',
      fontSize: '18px',
      fontFamily: 'Arial Black',
      marginBottom: '.2rem'
    },
    production: {
        marginLeft: '2.5rem'
    },
    production1: {
        fontWeight: 'bold',
        color: '#1ec0e8',
        marginTop: '.5rem',
        marginBottom: '.5rem'
    },
    production2: {
        fontWeight: 'bold',
        color: '#16abd0',
        marginBottom: '.5rem'
    },
    production3: {
        color: '#595959',
        fontWeight: 'bold',
        marginBottom: '.5rem'
    },
}));

const SideBar = () => {
    const classes = useStyles();
  return (
    <>
       <Card className={classes.container}>
            <Box className={classes.crossIcon}>
                <CloseIcon fontSize='small' />
            </Box>
            <Box className={classes.subContainer}>
                <Box>
                    <Box className={classes.title}>
                        <Person3Icon className={classes.titleIcon} fontSize='medium'/>
                        <Typography className={classes.title2}>Farzan Mirza</Typography>
                    </Box>
                    <Box className={classes.notifications}>
                        <StyledBadge badgeContent={2} color="error" fontSize='small'>
                            <NotificationsNoneIcon className={classes.notificationIcon} fontSize='medium' />
                        </StyledBadge>
                        <Typography className={classes.notificationHeading}>Notifications</Typography>
                    </Box>
                    <Box className={classes.divider}>
                        <Divider/>
                    </Box>
                    <Box className={classes.subNotification}>
                        <HomeIcon fontSize='small' className={classes.subIcon}/>
                        <Box>
                            <Typography variant='subtitle2' className={classes.subHeading}>Mirza International added a new document of BuffCow T1 Color Brown Invoice </Typography>
                            <Typography variant='subtitle2' className={classes.subHeading2}>45 minutes ago</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.subNotification}>
                        <PermPhoneMsgIcon fontSize='small' className={classes.subIcon}/>
                        <Box>
                            <Typography variant='subtitle2' className={classes.subHeading}>Mirza International added a new document of BuffCow T1 Color </Typography>
                        </Box>
                    </Box>
                    <Box className={classes.subNotification} style={{marginTop: '1rem'}}>
                        <SettingsIcon fontSize='small' className={classes.subIcon}/>
                        <Box>
                            <Typography variant='subtitle2' className={classes.subHeading}>Mirza International added a new  </Typography>
                            <Typography variant='subtitle2' className={classes.subHeading2}>45 minutes ago</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.all}>
                        <Typography className={classes.allHeading}>See all</Typography>
                    </Box>
                </Box>

                <Divider className={classes.simpleDivider}/>

                <Box>
                    <Box className={classes.home}>
                        <HomeIcon className={classes.titleIcon} fontSize='medium' />
                        <Typography className={classes.home2}>Home</Typography>
                    </Box>
                    <Box className={classes.notifications}>
                        <SettingsIcon className={classes.notificationIcon} fontSize='medium' />
                        <Typography className={classes.notificationHeading}>Production</Typography>
                    </Box>
                     <Box className={classes.divider}>
                        <Divider/>
                    </Box>
                    <Box className={classes.production}>
                        <Typography className={classes.production1}>Dying</Typography>
                        <Typography className={classes.production2}>Finishing</Typography>
                        <Typography className={classes.production3}>Crusting</Typography>
                    </Box>
                </Box>

                <Box>
                    <Box className={classes.home}>
                        <ArticleOutlinedIcon className={classes.titleIcon} fontSize='medium' />
                        <Typography className={classes.home2}>Reports</Typography>
                    </Box>
                    <Box className={classes.home}>
                        <PermPhoneMsgIcon className={classes.titleIcon} fontSize='medium' />
                        <Typography  className={classes.home2}>Planning</Typography>
                    </Box>
                    <Box className={classes.home}>
                        <CurrencyRupeeOutlinedIcon className={classes.titleIcon} fontSize='medium' />
                        <Typography className={classes.home2}>Finances</Typography>
                    </Box>
                </Box>

                <Divider className={classes.simpleDivider}/>

                <Box className={classes.home}>
                    <ExpandMoreOutlinedIcon className={classes.titleIcon} fontSize='medium' />
                     <Typography className={classes.home2}>See More</Typography>
                 </Box>
            </Box>
       </Card>
    </>
  )
}

export default SideBar
