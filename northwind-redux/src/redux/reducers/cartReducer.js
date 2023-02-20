import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function cartReducer(state = initialState.cart, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            var addedItem = state.find(c => c.product.id === action.payload.product.id);
            if (addedItem) {
                var newState = state.map(cartItem => {
                    if (cartItem.product.id === action.payload.product.id) {
                        return Object.assign({}, addedItem, { quantity: addedItem.quantity + 1 })
                    }
                    return cartItem;
                })
                return newState;
            } else {
                return [...state, { ...action.payload }] //array'e elemanı böyle ekleyebiliriz
                // [...state, state'in bir kopyasını al {...action.payload}] action ile gelen payload'ı ekle
            }

        case actionTypes.REMOVE_FROM_CART:
            const newState2 = state.filter(cartItem => cartItem.product.id !== action.payload.id)
            return newState2;
            
        default:
            return state;
    }
}