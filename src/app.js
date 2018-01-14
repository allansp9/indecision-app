console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "This is some info"
};

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: "Allan",
  age: 27,
  location: "Santos"
};

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
