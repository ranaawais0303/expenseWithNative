import { createContext, useContext, useReducer } from "react";

const ExpensesContext = createContext({
  //   expenses: [],
  //   addExpense: ({ description, amount, date }) => {},
  // setExpenses: (expenses) => {},
  //   deleteExpense: (id) => {},
  //   updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    //Add
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];

    //SET
    case "SET":
      return action.payload;

    /////update
    case "UPDATE":
      const updateableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updateableExpense = state[updateableExpenseIndex];

      //override the previous which field change
      const updatedItem = { ...updateableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updateableExpenseIndex] = updatedItem;
      return updatedExpenses;

    //Delete
    case "DELETE":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expenseReducer, []);

  //////Add Expenses
  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  ///Set Expenses
  function setExpenses(expenses) {
    dispatch({ type: "SET", payload: expenses });
  }

  ///Delete Expenses
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  //////////Update Expenses
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    setExpenses: setExpenses,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
export const useExpenses = () => useContext(ExpensesContext);
