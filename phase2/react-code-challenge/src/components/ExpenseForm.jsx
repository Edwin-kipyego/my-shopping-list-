import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(formData);
    setFormData({
      name: '',
      description: '',
      category: '',
      amount: '',
      date: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Expense Name" required />
      <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />
      <input name="amount" type="number" value={formData.amount} onChange={handleChange} placeholder="Amount" required />
      <input name="date" type="date" value={formData.date} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;