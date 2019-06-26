import {CONSTANTS} from '../actions';

let listID = 2;
let cardID = 3;

const initialState = [
    {
        title: "Yesterday",
        id: 0,
        cards: [
            {
                id: 0,
                text: "Static card in a static list"
            },
            {
                id: 1,
                text: "2nd card"
            }
        ]
    },
    {
        title: "Today",
        id: 1,
        cards: [
            {
                id: 0,
                text: "Static card in a static list"
            },
            {
                id: 1,
                text: "2nd card"
            }
        ]
    }
];


const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                id: listID,
                cards: []
            };
            listID += 1;
            return [...state, newList];
        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardID
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
        default: 
            return state;
    }
};

export default listReducer;