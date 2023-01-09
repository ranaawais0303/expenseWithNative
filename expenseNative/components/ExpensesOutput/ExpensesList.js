import { FlatList, Text } from "react-native";

function renderExpenseItem(itemData) {
    <Text>{itemData.item.description}</Text>
}
function ExpensesList({ expenses }) {
    <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id} />
}

export default ExpensesList;