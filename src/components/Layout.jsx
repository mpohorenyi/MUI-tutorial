import { AddCircleOutlined, SubjectOutlined } from "@mui/icons-material";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const classes = {
  root: {
    display: "flex",
  },
  page: {
    backgroundColor: "#f9f9f9",
    width: "100%",
  },
  drawer: {
    width: 240,
  },
  active: {
    backgroundColor: "#f4f4f4",
  },
};

const menuItems = [
  {
    text: "My Notes",
    icon: <SubjectOutlined color="secondary" />,
    path: "/",
  },
  {
    text: "Create Note",
    icon: <AddCircleOutlined color="secondary" />,
    path: "/create",
  },
];

export const Layout = ({ children }) => {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <Box sx={classes.root}>
      {/* app bar */}

      <Drawer
        sx={classes.drawer}
        variant="permanent"
        anchor="left"
        PaperProps={{ sx: classes.drawer }}
      >
        <Typography variant="h5">
          Menu
        </Typography>

        <List>
          {menuItems.map(item => (
            <ListItem
              key={item.text}
              disablePadding
              onClick={() => history.push(item.path)}
              sx={pathname === item.path && classes.active}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box sx={classes.page}>
        {children}
      </Box>
    </Box>
  );
};