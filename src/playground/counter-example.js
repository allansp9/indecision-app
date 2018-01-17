let count = 0;

const addOne = () => {
  count++;
  renderCounterApp();
};

const minusOne = () => {
  count--;
  renderCounterApp();
};

const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button id="my-btn1" className="btn" onClick={addOne}>
        +1
      </button>
      <button id="my-btn2" className="btn" onClick={minusOne}>
        -1
      </button>
      <button id="my-btn3" className="btn" onClick={reset}>
        reset
      </button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
