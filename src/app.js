console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "This is the subtitle",
  options: ["one", "two"]
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let count = 0;
const addOne = () => {
  console.log("addOne");
};
const minusOne = () => {
  console.log("minusOne");
};
const reset = () => {
  console.log("reset");
};

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

const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
