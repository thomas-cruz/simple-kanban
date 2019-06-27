import React from 'react';
import Card from './Card';
import ActionButton from './ActionButton';
import { Droppable } from 'react-beautiful-dnd';


const List = ({title, cards, listID}) => {
    return(
        <Droppable droppableId = {String(listID)}>
        {provided => (
            <div 
                {...provided.droppableProps} 
                ref = {provided.innerRef} 
                style={styles.container}
            >
                <h4>{title}</h4>
                {cards.map((card, index) => (
                    <Card 
                        text = {card.text}
                        index = {index}
                        id = {card.id}
                        key = {card.id}    
                    />
                ))}
                <ActionButton listID = {listID}/>
                {provided.placeholder}
            </div>
        )}
        </Droppable>
    )
}

const styles = {
    container: {
        backgroundColor: "#ccc",
        borderRadius: 3,
        height: '100%',
        width: 300,
        padding: 8,
        marginRight: 8
    }
}

export default List;