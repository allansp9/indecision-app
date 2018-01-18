console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "This is the subtitle",
  options: []
};

const formHandler = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.reset();
    renderForm();
  }
};

const removeAll = () => {
  app.options = [];
  renderForm();
};

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById("app");

const renderForm = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button onClick={makeDecision} disabled={app.options.length === 0}>
        What sould i do?
      </button>
      <button onClick={removeAll}>Remove All</button>

      <ol>{app.options.map(option => <li key={option}>{option}</li>)}</ol>

      <form onSubmit={formHandler}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderForm();
