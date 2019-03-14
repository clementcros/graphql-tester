import * as React from "react";

import { withStyles, AppBar, Toolbar } from "@material-ui/core";

const styles = (theme: any) => ({
    appBar: {
        top: "auto",
        bottom: 0
    },
    toolbar: {
        alignItems: "center",
        justifyContent: "space-between"
    },
    rightIcon: {
        marginLeft: theme.spacing.unit
    }
});

interface IFooterProps {
    classes: any;
}

/**
 * Footer of context form.
 */
const Footer = (props: IFooterProps) => {
    const { classes } = props;
    return (
        <AppBar position="fixed" color="secondary" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                {/* <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Button
                        variant="contained"
                        className={classes.button}
                        color="default"
                    >
                        ANNULER
                        <Cancel className={classes.rightIcon} />
                    </Button>
                    <Button
                        variant="contained"
                        className={classes.button}
                        color="default"
                    >
                        BROUILLON
                        <Archive className={classes.rightIcon} />
                    </Button>
                    <Button
                        variant="contained"
                        className={classes.button}
                        color="default"
                    >
                        SAVE
                        <Save_alt className={classes.rightIcon} />
                    </Button>
                </Grid> */}
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(styles)(Footer);
