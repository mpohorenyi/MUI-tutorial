import { AddCircleOutlined, EventNoteOutlined, SubjectOutlined } from "@mui/icons-material";
import { AppBar, Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const classes = {
  root: {
    display: "flex",
  },
  page: {
    width: "100%",
  },
  drawer: {
    width: 240,
  },
  active: {
    backgroundColor: "#f4f4f4",
  },
  appBar: {
    width: `calc(100% - 240px)`,
  },
  toolBar: {
    marginBottom: 2,
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
    <Box sx={classes.root} position="static">
      <AppBar sx={classes.appBar}>
        <Toolbar sx={{ gap: 2 }}>
          <EventNoteOutlined />
          <Typography variant="h6" component="div">
            Welcome
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={classes.drawer}
        variant="permanent"
        anchor="left"
        PaperProps={{ sx: classes.drawer }}
      >
        <Typography variant="h5" sx={{ p: 2 }} >
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
        <Toolbar sx={classes.toolBar}/>
        {children}
      </Box>
    </Box>
  );
};