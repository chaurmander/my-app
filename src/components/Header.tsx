import * as React from 'react';
import { Link } from 'react-router-dom';
import {AppBar, Toolbar, Typography} from '@material-ui/core/';


export const Header: React.StatelessComponent<{}> = () => {
    return (
            <AppBar position="static">
                <Toolbar>
              
                    <Typography variant="display2" color="inherit" align='center'>
                        <Link style={{color: "white" }} to="/">Weather</Link>
                        
                    </Typography>
                </Toolbar>
            </AppBar>
    );
}