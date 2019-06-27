import React from 'react';
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from 'react-beautiful-dnd';


const cardPart = ({text, index, id}) => {
    return(
        <Draggable draggableId={String(id)} index={index}>
        {provided => (
            <div {...provided.draggableProps} {...provided.dragHandleProps} ref = {provided.innerRef}>
            <Card style = {styles.container}>
                <CardContent>
                    <Typography gutterBottom>{text}</Typography>
                </CardContent>
            </Card>
            </div>
        )}      
        </Draggable>
    )
}

const styles = {
    container: {
        marginBottom: 8
    }
}

export default cardPart;