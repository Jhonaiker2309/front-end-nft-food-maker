import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import "./Navbar.css"
import {Link} from "react-router-dom";

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar>
                <Link to="/" className="link"><Button color="inherit">Food searcher</Button></Link>
                <Link to="/nfts" className="link"><Button color="inherit">My NFT List</Button></Link>
            </Toolbar>
            </AppBar>
        </Box>
    );
}