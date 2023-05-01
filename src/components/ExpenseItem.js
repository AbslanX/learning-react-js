function ExpenseItem() {
  //Invalid JSX code
  //return <div>Date</div><div><h2>Title</h2><div>Amount</div></div>;

  //one way to resolve this is by surrounding the code with a root element.
  return (
    <div>
      <div>March 28th, 2021</div>
      <div>
        <h2>Car Insurance</h2>
        <div>$249.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

//You must only have one root element per return statement, or JSX code block.
//The code block : "<div>Date</div><div><h2>Title</h2><div>Amount</div></div>"" is not valid JSX code
//because it has two root elements: <div>Date</div> and <div><h2>Title</h2><div>Amount</div></div>.
