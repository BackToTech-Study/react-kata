import { useState } from "react";
import "../style.css";
const UseStateExample = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [currentName, setCurrentName] = useState("");
  const [currentFullName, setCurrentFullName] = useState({
    name: "",
    surname: "",
  });

  const decrement = () => {
    setCurrentValue((prevValue) => {
      return prevValue - 1;
    });
  };
  const increment = () => {
    setCurrentValue((prevValue) => {
      return prevValue + 1;
    });
  };

  return (
    <>
      <div className="double">
        <button className="margined" onClick={decrement}>
          -
        </button>
        <span className="margined">{currentValue}</span>
        <button className="margined" onClick={increment}>
          +
        </button>
      </div>
      <div className="double">
        <label className="margined">Name</label>
        <input
          className="margined"
          onChange={(e) => {
            e.preventDefault();
            setCurrentName(e.target.value);
          }}
        />
        <div className="solid margined">
          <div className="lessermargined row">
            <label className="lessermargined">Name from useState =</label>
            <p>{currentName}</p>
          </div>
        </div>
      </div>
      <div className="double">
        <label className="margined">Name</label>
        <input
          className="margined"
          onChange={(e) => {
            e.preventDefault();
            setCurrentFullName((currentFullName) => {
              return { ...currentFullName, name: e.target.value };
            });
          }}
        />
        <label className="margined">SurName</label>
        <input
          className="margined"
          onChange={(e) => {
            e.preventDefault();
            setCurrentFullName((currentFullName) => {
              return { ...currentFullName, surname: e.target.value };
            });
          }}
        />
        <div className="solid margined">
          <div className="lessermargined row">
            <label className="lessermargined">FullName from useState =</label>
            <p>{currentFullName.name + " " + currentFullName.surname}</p>
          </div>
          <div className="lessermargined row">
            <label className="lessermargined">Name from useState =</label>
            <p>{currentFullName.name}</p>
          </div>
          <div className="lessermargined row">
            <label className="lessermargined">SurName from useState =</label>
            <p>{currentFullName.surname}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseStateExample;
