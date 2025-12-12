import React, { useState } from "react";

const AddTransaction = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return alert("Enter all fields!");

    onAdd({
      title,
      amount: Number(amount),
      id: Date.now(),
    });

    setTitle("");
    setAmount("");
  };

  return (
    <div className="card mt-20">
      <h2>Add New Expense</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title (Shopping, Food...)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount (Use - for Expense)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button className="btn">Save</button>
      </form>
    </div>
  );
};

export default AddTransaction;
