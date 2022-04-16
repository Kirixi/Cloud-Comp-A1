import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


function Header() {
  return (
    <header>
        <Box sx={{ flexGrow: 1, color: "black"}}>
            <AppBar position="static" style={{backgroundColor: "black"}}>
                <Toolbar>
                    <Button href="/" style={{ marginRight: 16 }}>Memebank</Button>
                    <Button href="/Upload" color="inherit" style={{ marginRight: 16 }}>Post</Button>
                    <Button href="/Login" color="inherit" style={{ marginRight: 16 }}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </header>
  )
}

export default Header
