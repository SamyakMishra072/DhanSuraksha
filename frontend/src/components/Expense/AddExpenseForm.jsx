import React, { useState } from "react";
import Input from "../Inputs/Input";
import EmojiPickerPopup from "../layouts/EmojiPickerPopup";

const AddExpenseForm = ({ onAddExpense }) => {
  const [income, setIncome] = useState({
    category: "",
    amount: "",
    date: "",
    icon: "",
  });

  const handleChange = (key, value) =>
    setIncome({
      ...income,
      [key]: value,
    });

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 space-y-4">
      <div className="flex justify-center">
        <EmojiPickerPopup
          icon={income.icon}
          onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
        />
      </div>

      <Input
        value={income.category}
        onChange={({ target }) => handleChange("category", target.value)}
        label="Category"
        placeholder="Rent, Groceries, etc"
        type="text"
        className="rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
      />
      <Input
        value={income.amount}
        onChange={({ target }) => handleChange("amount", target.value)}
        label="Amount"
        placeholder="0.00"
        type="number"
        className="rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
      />
      <Input
        value={income.date}
        onChange={({ target }) => handleChange("date", target.value)}
        label="Date"
        type="date"
        className="rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
      />

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => onAddExpense(income)}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-rose-400 to-pink-500 text-white font-semibold hover:from-rose-500 hover:to-pink-600 transition-shadow shadow-md hover:shadow-lg"
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default AddExpenseForm;
