export const initialState ={
    cart: [],
};

export const getCartTotal = (cart) =>
cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };

        case 'REMOVE_FROM_CART':
            return{
                ...state,
                 cart: state.cart.filter(item => item.id !== action.id)
            }
        default:
            return state;
    }
};

export default reducer;