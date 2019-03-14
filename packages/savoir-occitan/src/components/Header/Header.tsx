import React from "react";

import {
    withStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";

interface IHeaderProps {
    classes: any;
    title: string;
}

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
};

/**
 * Header.
 */
const Header = (props: IHeaderProps) => {
    const { classes, title } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        color="inherit"
                        className={classes.grow}
                    >
                        {title}
                    </Typography>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="NotificationsIcon"
                    >
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="AccountCircle"
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(Header);
