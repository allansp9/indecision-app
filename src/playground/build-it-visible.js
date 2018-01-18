const appRoot = document.getElementById("app");

let visible = false;
let content;

const toggle = () => {
  visible = !visible;

  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>

      <button onClick={toggle}>
        {visible ? "Hide details" : "Show details"}
      </button>
      {visible && <p>Hey. These are some details you can now see!</p>}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
