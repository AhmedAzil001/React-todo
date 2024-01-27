import { useEffect, useState } from "react";
import "./App.css";
import Item from "./Item";

function App() {
  const data = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  const [text, setText] = useState("");
  const [items, setItem] = useState(data);
  const [index, setIndex] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (flag) {
      items.splice(index, 1, text);
      setItem(items);
      setFlag(false)
      setText("");
    } else {
      setItem([...items, text]);
      setText("");
    }
  };

  const DelTask = (index) => {
    const newItems = items.filter((val, i) => {
      return i !== index;
    });
    setItem(newItems);
  };

  const EditTask = (index) => {
    setText(items[index]);
    setIndex(index);
    setFlag(true);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(items));
  }, [items,flag]);

  return (
    <div className="container">
      <div className="heading">
        <h1>TODO</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Create new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn" type="submit">
          ADD
        </button>
      </form>
      {items.map((value, index) => (
        <Item
          title={value}
          key={index}
          index={index}
          DelTask={DelTask}
          EditTask={EditTask}
        />
      ))}
    </div>
  );
}

export default App;
