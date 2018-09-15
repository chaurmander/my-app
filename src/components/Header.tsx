import * as React from 'react';
import { Link } from 'react-router-dom';
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';

export const Header: React.StatelessComponent<{}> = () => {
    return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton  aria-label="Menu" color="inherit">
                        <MenuIcon aria-haspopup="true"/>
                    </IconButton>
                    <Typography variant="display2" color="inherit">
                        <Link style={{color: "white"}} to="/">Weather</Link>
                        <Link style={{color: "white"}} to="/TimeZone"> Time Zone </Link>
                        <Link style={{color: "white"}} to="/CurrencyConvert"> Currency Convert </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
    );
}