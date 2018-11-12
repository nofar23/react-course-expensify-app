import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filterseducer from '../reducers/filters';
 
//Store creation
export default () => {
    const store = createStore(
        combineReducers({
            expenses:expensesReducer,
            filters: filterseducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};