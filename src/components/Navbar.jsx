import React from 'react';
import styled from '@emotion/styled';

import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Mail, Notifications, Pets } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)(({theme})=>({
    display: "flex",
    justifyContent: "space-between",
}));

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0, 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "15px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    {/* <Pets sx={{ display: { xs: "block", sm: "block" }}}/> */}
                    <Pets/>
                    <Typography variant='h6' sx={{ marginLeft: "5px", display: { xs: "none", sm: "block" }}}>Reactive Web</Typography>
                </Box>
                <Search><InputBase placeholder='Search...' sx={{ paddingLeft: 1}}/></Search>
                <Icons>
                    <Badge badgeContent={4} color='error'>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color='error'>
                        <Notifications />
                    </Badge>
                    <Avatar 
                        sx={{ width: 30, height: 30 }}
                        onClick={e=>setOpen(true)}
                    />
                </Icons>
                <UserBox onClick={e=>setOpen(true)}>
                    <Avatar 
                        sx={{ width: 30, height: 30 }}
                    />
                    <Typography variant='span'>John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                // anchorEl={anchorEl}
                open={open}
                onClose={e=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={e=>setOpen(false)}>Profile</MenuItem>
                <MenuItem onClick={e=>setOpen(false)}>My account</MenuItem>
                <MenuItem onClick={e=>setOpen(false)}>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar;
