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
        <Paper className="nav-container">
            <MenuList>
                <Link to={'/'} className="menu-item-action">
                    <MenuItem className="menu-item">
                        <ListItemIcon>
                            <HomeIcon fontSize="small" className="menu-item-icon" />
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