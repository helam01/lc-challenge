import React from "react";
import { Link } from 'react-router-dom';

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';

const Nav = () => {
    return (
        <>
        <Paper sx={{ 
            width: 200, 
            maxWidth: '100%',
            height: '100vh' 
        }}>
            <MenuList>
                <Link to={'/'} className="menu-item-action">
                    <MenuItem>
                        <ListItemIcon>
                            <HomeIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText sx={{
                            textAlign: 'left'
                        }}>
                            Dashboard
                        </ListItemText>
                    </MenuItem>
                </Link>
                <Divider/>
            </MenuList>
        </Paper>
        </>
    );
}

export default Nav;