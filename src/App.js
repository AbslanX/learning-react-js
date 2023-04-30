//necessary to import a component to use it in another component
import ExpenseItem from "./components/ExpenseItem";

//lowercase components are html and uppercase components are react components
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
