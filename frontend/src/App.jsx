import { useState } from "react";
import Home from "./components/Home";
import History from "./components/History";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#1b1b1b", color: "white" }}>
      <div style={{ display: "flex", gap: "20px", padding: "20px", justifyContent: "center" }}>
        <button onClick={() => setPage("home")} className="nav-btn">Home</button>
        <button onClick={() => setPage("history")} className="nav-btn">History</button>
      </div>

      {page === "home" && <Home />}
      {page === "history" && <History />}
    </div>
  );
}

export default App;
