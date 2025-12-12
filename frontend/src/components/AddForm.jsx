import { useState } from "react";
import axios from "axios";

function AddForm({ type }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = type === "income" ? "/add-income" : "/add-expense";

    const res = await axios.post("http://localhost:5000" + url, {
      title,
      amount: Number(amount)
    });

    alert(res.data.message);
    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add {type}</h3>

      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button className="submit-btn" type="submit">Submit</button>
    </form>
  );
}

export default AddForm;
