import axios from "axios";
const req =
  "https://react-native-course-a5546-default-rtdb.firebaseio.com/expenses.json";
export function storeExpense(expenseData) {
  axios.post(req, expenseData);
}
