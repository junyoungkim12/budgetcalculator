import { Component } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseItem from "./components/ExpenseItem";

class App extends Component {
  // 부모컴포넌트 배열
  initialExpenses = [
    { id: 1, charge: "렌트비", amount: 1600 },
    { id: 2, charge: "교통비", amount: 400 },
    { id: 3, charge: "식비", amount: 1200 },
  ];
  render() {
    return (
      <main className="main-container">
        <h1>예산 계산기</h1>

        <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
          {/* {Expense From} */}
          <ExpenseForm />
        </div>
        <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
          {/* {Expense List} */}
          {/* 자식 컴포넌트에 배열 보내기 */}
          {this.props.initialExpenses.map((expense) => {
            return <ExpenseItem expense={expense} key={expense.id} />;
})}
        </div>
        <div style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}>
          <p style={{ fontSize: "2rem" }}>
            총지출:
            <span className="expense">{this.props.expense.charge}</span>
            <span className="amount">{this.props.expense.amount}원</span>
          </p>
        </div>
      </main>
    );
  }
}

export default App