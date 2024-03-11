import "./App.css";
import Counter from "./counter";
import Friends from "./friends";
import Friends1 from "./friends1";
import Team from "./team";
import Users from "./users";

function App() {
  function handleClick() {
    alert("button clicked");
  }
  const handleClick2 = () => {
    alert("button2 clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <Users></Users>
      <Friends></Friends>
      <h1>React Core-ConCepts 2</h1>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button
        onClick={() => {
          alert("third clicked");
        }}
      >
        Third
      </button>

      {/* Vejailla ektu por dekhbo */}
      <button onClick={() => addToFive(3)}>Fourth</button>
    </>
  );
}

export default App;
