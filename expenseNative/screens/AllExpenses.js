import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useExpenses } from "../store/expenses-context";
function AllExpenses() {
  const expensesCtx = useExpenses();
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found "
    />
  );
}
export default AllExpenses;
