import React from "react";
import { View } from "react-native";
import Input from "./Input";

function ExpenseForm(props) {
  function amountChangeHandler() {}
  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeHolder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCapitalize:'none',
          // autoCorrect: false, //default is ture
          onChangeText: () => {},
        }}
      />
    </View>
  );
}

export default ExpenseForm;
