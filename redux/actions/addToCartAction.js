export const addToCart= book =>{
    return{
        type : 'ADD_TO_CART',
        payload : book,
    }
}

export const removeFromCart= book =>{
    return{
        type : 'REMOVE_FROM_CART',
        payload : book,
    }
}

export const emptyCart= book =>{
    return{
        type : 'EMPTY_CART',
        payload : book,
    }
}

