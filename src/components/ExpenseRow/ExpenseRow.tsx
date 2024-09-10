import style from "./ExpenseRow.module.css";

interface ExpenseRowProps {
  merchant: string;
  amount: number;
  description: string;
  date: string;
  category: string;
  status: string;
}

const ExpenseRow = ({
  merchant,
  amount,
  description,
  date,
  category,
  status,
}: ExpenseRowProps) => {
  const expenseDate = new Date(date);
  const expenseDay = expenseDate.getDate();
  const expenseMonth = expenseDate.toLocaleString("default", {
    month: "short",
  });

  return (
    <div className={style.TableRow}>
      <div>
        {expenseMonth} {expenseDay}
      </div>
      <div>{merchant}</div>
      <div>£{amount.toFixed(2)}</div>
      <div>{category}</div>
      <div>{description}</div>
      <div>{status}</div>
    </div>
  );
};

export default ExpenseRow;
