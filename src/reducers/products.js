var initialState = [
    {
        id: 1,
        name: "iPhone X",
        price: 1000,
        status: true,
    },
    {
        id: 2,
        name: "iPhone Xs",
        price: 1200,
        status: false,
    },
    {
        id: 3,
        name: "iPhone 12 pro max",
        price: 2000,
        status: true,
    },
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
};

export default products;
