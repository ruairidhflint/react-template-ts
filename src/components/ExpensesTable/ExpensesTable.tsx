import { useEffect, useState } from "react";
import style from "./ExpensesTable.module.css";
import ExpenseRow from "../ExpenseRow/ExpenseRow";
import ErrorPage from "../ErrorPage/ErrorPage";

const TableHeader = () => {
  return (
    <div className={style.TableHeader} data-testid="expenses-header">
      <div>Date</div>
      <div>Merchant</div>
      <div>Amount</div>
      <div>Category</div>
      <div>Description</div>
      <div>Status</div>
    </div>
  );
};

const ExpensesTable = () => {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Create an AbortController for managing the requests
    const abortController = new AbortController();
    const signal = abortController.signal;

    const base_url = "https://expenses-backend-mu.vercel.app/expenses";

    // Fetch data using async/await with the Fetch API
    const fetchUsingAsyncAwaitWithFetchApi = async () => {
      try {
        const response = await fetch(base_url, {
          headers: {
            "Content-Type": "application/json",
            Username: "firstname.lastname", // <--- Make sure you change this }
          },
          signal,
        }); // Fetch data based on the current page
        const data = await response.json();
        setExpenses(data);
        setError(null);
      } catch (error: any) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted"); // Log a message when the request is intentionally aborted
          return; // Exit the function to prevent further error handling
        }
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    // Trigger all fetching methods on component mount
    fetchUsingAsyncAwaitWithFetchApi();

    // Cleanup: Abort the controller and set loading to true when the component unmounts
    return () => {
      abortController.abort(); // Cancel any ongoing requests
      setIsLoading(true); // Reset loading state
    };
  }, []);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <div
        className={style.ExpensesGridTable}
        data-testid="expenses-table-component"
      >
        <h1 className={style.Header} data-testid="header">
          Expenses
        </h1>
        <TableHeader />
        {isLoading ? (
          <div className={style.loading} data-testid="table-loading"></div>
        ) : (
          <div className={style.TableBody} data-testid="expenses-body">
            {expenses?.map((expense: any) => {
              return <ExpenseRow key={expense.id} {...expense} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default ExpensesTable;
