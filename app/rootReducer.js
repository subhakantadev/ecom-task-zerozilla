import { combineReducers } from '@reduxjs/toolkit'
import addToCartReducer from '../redux/reducers/addToCartReducer'

const rootReducer = combineReducers({
    cartProduct: addToCartReducer,
})


export default rootReducer
