import { useEffect, useState } from "react";

function History() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/history") // PORT corrected
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto" }}>
      <h2 style={{ textAlign: "center" }}>Transaction History</h2>

      {list.map((item, index) => (
        <div key={index} style={{ background: "#222", padding: "12px", marginTop: "10px", borderRadius: "10px" }}>
          <h3>{item.title}</h3>
          <p>Amount: {item.amount}</p>
          <p>Type: {item.type}</p>
          <p>Date: {new Date(item.date).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default History;
