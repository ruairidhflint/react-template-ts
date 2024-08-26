import React, { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaHome,
  FaSearch,
} from "react-icons/fa";

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://expenses-backend-mu.vercel.app/expenses",
          {
            headers: {
              "Content-Type": "application/json",
              Username: "firstname.lastname",
            },
          }
        );

        if (!response.ok) {
          throw new Error("response was not ok");
        }
        const result = await response.json();
        setExpenses(result);
      } catch (error) {
        console.error("error fetching:", error);
      }
    };
    getData();
  }, [expenses]);

  return (
    <div id="template-text">
      <nav>
        <p>A Web Page</p>
        <ul>
          <li>
            <FaArrowLeft size="25px" color="black" />
          </li>
          <li>
            <FaArrowRight size="25px" color="black" />
          </li>
          <li>
            <FaTimes size="25px" color="black" />
          </li>
          <li>
            <FaHome size="25px" color="black" />
          </li>
          <li className="input">
            <input type="text" placeholder="https://" />
          </li>
          <li>
            <button className="searchbutton" type="submit">
              <FaSearch size="25px" color="black" />
            </button>
          </li>
        </ul>
      </nav>
      <div className="container">
        <h1>Expenses</h1>
        <table className="expensetable">
          <thead>
            <tr>
              <th>Date</th>
              <th>Merchant</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((e) => (
              <tr key={e.id}>
                <td>{e.date}</td>
                {/* would format the date correctly if  I had more time */}
                <td>{e.merchant}</td>
                <td>${e.amount}</td>
                <td>{e.category}</td>
                <td>{e.description}</td>
                <td>{e.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer>
        <p>//</p>
      </footer>
    </div>
  );
}

export default App;
