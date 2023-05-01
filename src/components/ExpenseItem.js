//We have to tell React which files to include in the build process. We do this by importing them into our App.js file. We can import them by using the relative path
import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>March 28th, 2021</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>$249.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
