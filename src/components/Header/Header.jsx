import React from 'react'
import {Autocomplete} from '@react-google-maps/api';
import {AppBar,Toolbar,Typography,InputBase,Box} from '@material-ui/core';
import {SearchIcon} from '@material-ui/icons/Search';
import useStyles from './styles';

const Header = () => {
    const classes=useStyles();
    return (
        <AppBar position="Static">
            <Toolbar className={classes.Toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
                {/* <Autocomplete> */}
                    <div className={classes.search}>
                        <div className={classes.SearchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase placeholder="Search..." classes={{root:classes.inputRoot,input:classes.inputInput}}/>
                    </div>
                {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;