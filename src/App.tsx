import { useEffect, useState } from 'react';

interface Expense {
  id: number;
  date: string;
  merchant: string;
  amount: number;
  category: string;
  description: string;
  status: string;
}

function formatDate(d: string) {
  // extract the date to month/day format. Could probably use some tweaking
  let newDate = new Date(Date.parse(d));
  return (newDate.toLocaleString('en-gb', {month:'short'}) + ' ' + newDate.getDate());
}

/* TODO:
- better currency formatting. I followed the spec, but the columns should be aligned
and each price should have .00 values, to increase readability
- more elegant date formatting
- better flexbox styling (particularly wrapping) -- a table should always be used
for tabular data for accessibility reasons, but I'm struggling getting the styling
coherent and spending too much time on it now
- there's a duplicate item.key issue that needs to be resolved
- I think the intention of this exercise was partly to write a separate component
for the table so it is reusable but I didn't initially realise that,
so that should be fixed
- an api url shouldn't really be raw in the frontend code
(or header information like Username)
*/

function App() {

  const url = 'https://expenses-backend-mu.vercel.app/expenses';
  const [expenseData, setExpenseData] = useState<Expense[]>();

  useEffect(() => {

    async function fetchData() {
      try {
        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Username: "katharine.osborne"
          }
        });
        const data = await response.json();
        setExpenseData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      
    };
    if (!expenseData) {
        fetchData();
    }

    // below is my preferred way of handling a fetch (within useEffect)
    /*
    const fetchData = () => {
      fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Username: "katharine.osborne"
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json() as Promise<{ data: T }>;
        })
        .then(data => {
          setExpenseData(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };
    if (!expenseData) {
    }
    fetchData();*/
  }, []);

  return (
    <div id="template-text">
      <h1>Expenses</h1>
    <table className="table">
        <tr className="row">
            <th className="header">Date</th>
            <th className="header">Merchant</th>
            <th className="header">Amount</th>
            <th className="header">Category</th>
            <th className="header">Description</th>
            <th className="header">Status</th>
        </tr>
        {expenseData && expenseData.map((item: Expense) => {
        return (
          <tr className="row"  key="item.id">
            <td className="cell">
            {item.id}
          </td>
          <td className="cell">
            {formatDate(item.date)}
          </td>
          <td className="cell">
            {item.merchant}
          </td>
          <td className="cell">
            £{item.amount}
          </td>
          <td className="cell">
            {item.category}
          </td>
          <td className="cell">
            {item.description}
          </td>
          <td className="cell">
            {item.status}
          </td>
        </tr>
        )
      })
      }
    </table>

    </div>
  );
}

export default App;
