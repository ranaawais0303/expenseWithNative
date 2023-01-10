import { useLayoutEffect } from "react";
import { Text } from "react-native";
function ManageExpenses({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;

  //!! this covert into boolean
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return <Text> Manage Expenses Screen</Text>;
}
export default ManageExpenses;
