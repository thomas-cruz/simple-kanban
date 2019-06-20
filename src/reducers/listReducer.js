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
        default: 
        return state;
    }
};

export default listReducer;