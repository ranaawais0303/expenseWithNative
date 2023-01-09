import { Text, View } from "react-native";
function ExpensesSummary({ expenses, periodName }) {
    const expenseSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0)

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>${expenseSum.toFixed(2)}</Text>
        </View>
    )
}
export default ExpensesSummary;