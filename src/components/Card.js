import React from 'react';
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";


const cardPart = ({text}) => {
    return(
        <Card style = {styles.container}>
            <CardContent>
                <Typography gutterBottom>{text}</Typography>
            </CardContent>
        </Card>
    )
}

const styles = {
    container: {
        marginBottom: 8
    }
}

export default cardPart;