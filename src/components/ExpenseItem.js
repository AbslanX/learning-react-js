//naming convention for components is to start with a capital letter and camel case the rest of the name. example: ExpenseItem.js
//a component is a javascript function that returns some jsx

function ExpenseItem() {
    return <h2>Expense item!</h2>
}

//it is necessary to export the component to use it in another component
export default ExpenseItem;
