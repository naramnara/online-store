import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartActions";
const cartReducer = (state={
    items: []}, action) =>{
        switch (action.type) {
            case ADD_TO_CART:
                return{
                    ...state, items:
                    [...state.items, action.payload],
                };
                case REMOVE_FROM_CART:
                    return{
                        ...state, items: state.items.filter(item=>item.id!==action.payload.id),
                    };
                    default: return state;
        }
    };
    export default cartReducer;