import { useState } from "react";

function Home() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!type) return alert("Select Income or Expense first!");

    const response = await fetch("http://localhost:6000/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, amount: Number(amount), type }),
    });

    const data = await response.json();

    if (data.success) {
      alert("Added Successfully!");
      setTitle("");
      setAmount("");
      setType("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Expense Tracker</h1>
      <p>Track your income, expenses, and history easily!</p>

      {/* Add Transaction Box */}
      <div style={{ width: "380px", margin: "40px auto", padding: "20px", background: "#222", borderRadius: "12px" }}>
        <h2>Add Transaction</h2>

        {/* Income / Expense Selection */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
          <button className="nav-btn" onClick={() => setType("income")}>Income</button>
          <button className="nav-btn" onClick={() => setType("expense")}>Expense</button>
        </div>

        <form onSubmit={handleAdd}>
          <input
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />

          <input
            className="input"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
          />

          <button className="submit-btn" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
