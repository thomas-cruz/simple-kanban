import {CONSTANTS} from '../actions';

let listID = 2;
let cardID = 4;

const initialState = [
    {
        title: "Yesterday",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "Static card in a static list"
            },
            {
                id: `card-${1}`,
                text: "2nd card"
            }
        ]
    },
    {
        title: "Today",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: "Static card in a static list"
            },
            {
                id: `card-${3}`,
                text: "Another card"
            }
        ]
    }
];


const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                id: `list-${listID}`,
                cards: []
            };
            listID += 1;
            return [...state, newList];
        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`
            }
            cardID += 1;
            const newState = state.map(list => {
                if (list.id === action.payload.listID){
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                }else{
                    return list;
                }
            });
            return newState;
        }
        case CONSTANTS.DRAGGED:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId
            } = action.payload;
            const newState = [...state];
            //in the same list
            if(droppableIdStart === droppableIdEnd){
                const list = state.find(list => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd, 0, ...card);//insert card
            }
            //different list
            if(droppableIdStart != droppableIdEnd){
                const listStart = state.find(list => droppableIdStart === list.id)
                const card = listStart.cards.splice(droppableIndexStart, 1);
                //get list destination
                const listEnd = state.find(list => droppableIdEnd === list.id);
                listEnd.cards.splice(droppableIndexEnd, 0, ...card);//insert card
            }

            return newState;


        default: 
            return state;
    }
};

export default listReducer;