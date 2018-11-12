import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('shpuld setup edit expense action object', () => {
    const action = editExpense('123abc', {note: 'A new not'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note: 'A new not'}
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent', 
        note: 'this was lat months rent', 
        createdAt: '123456',
        amount: 109500};
        const action = addExpense(expenseData);
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                ...expenseData,
                id: expect.any(String)
            }
        });
    
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount : 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});