import * as React from "react";

import { withStyles, createStyles } from "@material-ui/core";

import Header from "../Header";
import Footer from "../Footer";
import ProductCard from "../ProductCard";

const styles = (theme: any) =>
    createStyles({
        root: {
            margin: "50px",
            marginLeft: "200px",
            marginRight: "200px",
            verticalAlign: "middle",
            borderRadius: 13,
            background: theme.palette.primary[100]
        }
    });

interface IAppProps {
    classes: any;
}

/**
 * App component.
 */
const App = (props: IAppProps) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Header title="Savoir-Occitan" />
            <div className={classes.root}>
                <ProductCard />
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default withStyles(styles)(App);
