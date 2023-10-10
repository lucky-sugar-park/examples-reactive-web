import React from 'react';

import { Autocomplete, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, TextField } from '@mui/material';
import { AccountBox, Article, Group, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material';

const Sidebar = ({onThemeChanged}) => {
    const handleThemeChanged = (e, theme) => {
        onThemeChanged(theme===null?"light":theme.name);
    }
    return (
        <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" }}}>
            <Box position="fixed">
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Homepage" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Article />
                        </ListItemIcon>
                        <ListItemText primary="Pages" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Group />
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Storefront />
                        </ListItemIcon>
                        <ListItemText primary="Marketplace" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <AccountBox />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <ModeNight />
                        </ListItemIcon>
                        <Switch disabled />
                    </ListItemButton>
                </ListItem>
                {/* <Divider/> */}
                <ListItem disablePadding>
                    <Autocomplete
                        disablePortal
                        disableClearable
                        id="combo-box-theme-mode-selection"
                        options={
                            [
                                { label: 'dark-standard',   name: 'dark-standard'},
                                { label: 'light-standard',  name: 'light-standard'},
                                { label: 'grey',   name: 'grey'},
                                { label: 'green',  name: 'green'},
                            ]
                        }
                        sx={{ width: 165, marginTop: 1.5 }}
                        renderInput={(params)=> <TextField {...params} label="Theme" variant='standard'/>}
                        onChange={(e,v)=>handleThemeChanged(e,v)}
                    />
                </ListItem>
            </List> 
            </Box>   
        </Box>
    )
}

export default Sidebar;
