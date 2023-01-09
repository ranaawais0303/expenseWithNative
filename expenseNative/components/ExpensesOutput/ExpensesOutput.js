import { Text, View, FlatList } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2022-01-05')
    },
    {
        id: 'e3',
        description: 'some bananas',
        amount: 5.99,
        date: new Date('2021-12-01')
    },
    {
        id: 'e4',
        description: 'A Book',
        amount: 14.99,
        date: new Date('2022-02-19')
    },
    {
        id: 'e5',
        description: 'Another Book',
        amount: 18.99,
        date: new Date('2022-02-18')
    }
];
function ExpensesOutput({ expenses, expensesPeriod }) {


    <View>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
        <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
}

export default ExpensesOutput;