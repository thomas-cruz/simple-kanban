import React from 'react';
import Card from './Card';
import ActionButton from './ActionButton';


const List = ({title, cards}) => {
    return(
        <div style={styles.container}>
            <h4>{title}</h4>
            {cards.map(card => 
                (<Card key = {card.id} text = {card.text}/>
            ))}
            <ActionButton/>
        </div>
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