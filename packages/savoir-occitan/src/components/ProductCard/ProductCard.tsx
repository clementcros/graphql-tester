import React from "react";

import {
    withStyles,
    Avatar,
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    CardActions,
    IconButton,
    Typography
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import red from "@material-ui/core/colors/red";

import { IProduct } from "common";

const styles = () => ({
    card: {
        maxWidth: 400,
        margin: "1%"
    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    actions: {
        display: "flex"
    },
    avatar: {
        backgroundColor: red[500]
    }
});

interface IProductCardProps extends IProduct {
    classes: any;
    title: string;
    price: number;
    description: string;
}

/**
 * Compo desc.
 */
const ProductCard = (props: IProductCardProps) => {
    const { classes, title, price, description } = props;
    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                }
                title={title}
                subheader={`${price} euros`}
            />
            <CardMedia
                className={classes.media}
                image={require("../../__data__/images/paella.jpg")}
                title="Paella dish"
            />
            <CardContent>
                <Typography component="p">{description}</Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default withStyles(styles)(ProductCard);
