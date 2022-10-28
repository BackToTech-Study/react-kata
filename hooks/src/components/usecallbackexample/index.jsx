import { useCallback } from "react";
import { useState } from "react";
import "../style.css";
import NumberList from "./numberlist";

const UseCallbackExample = () => {
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState("light");

  // UnComment fetchNumbersGreaterThan click toggle theme and read the logs

  //   const fetchNumbersGreaterThan = () => {
  //     return [number, number + 1, number + 2, number + 3];
  //   };

  const fetchNumbersGreaterThan = useCallback(() => {
    return [number, number + 1, number + 2, number + 3];
  }, [number]);

  const toggleTheme = () => {
    if (color === "light") {
      setColor("dark");
    } else {
      setColor("light");
    }
  };

  return (
    <div className="double margined">
      <input
        type={"number"}
        className="lessermargined"
        onChange={(e) => {
          e.preventDefault();
          setNumber(e.target.value);
        }}
      ></input>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className="solid lessermargined">
        <div className={color}>
          <NumberList getNumbers={fetchNumbersGreaterThan} />
        </div>
      </div>
    </div>
  );
};

export default UseCallbackExample;
