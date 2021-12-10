import { createStore, combineReducers } from 'redux';
import headerNav from './reducers/header-nav';
import products from './reducers/products';
import categories from './reducers/categories';
import manufacturers from './reducers/manufacturers';

const rootReducer = combineReducers({
    headerNav,
    products,
    categories,
    manufacturers
})

const store = createStore(rootReducer);

export default store;