import React from "react";

import { withStyles, createStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";

import Header from "../Header";
import Footer from "../Footer";
import ProductCard from "../ProductCard";

import Request from "superagent";

const styles = (theme: any) =>
    createStyles({
        root: {
            marginTop: "50px",
            marginBottom: "100px",
            marginLeft: "10%",
            marginRight: "10%",
            padding: 10,
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
    // const [name, setName] = useState("");

    const { classes } = props;
    return (
        <React.Fragment>
            <Header title="Savoir-Occitan" />
            <div className={classes.root}>
                <Button
                    onClick={() => {
                        Request.get("http://localhost:3001/name")
                            .type("json")
                            .query({})
                            .then((response) => {
                                console.log(response);
                            })
                            .catch((error) => {
                                return;
                            });
                    }}
                >{`Welcome`}</Button>
                <ProductCard
                    title="Shrimp and Chorizo Paella"
                    price={13.97}
                    description="This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like."
                />
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default withStyles(styles)(App);
