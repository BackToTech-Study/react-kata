import { useMemo, useState } from "react";
import "../style.css";

const slowName = (name, surName) => {
  for (let i = 0; i < 1000000000; i++) {}
  return name + " " + surName;
};

const UseMemoExample = () => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [color, setColor] = useState("light");

  //   //Try change color with this fullName -
  //   //In this case change color will re-render and re-run the slowfunction hence changecolor will take a long time
  //   const fullName = slowName(name, surName);

  //   Try change color with this fullName
  //   In this case as long as name or surName do not change the app will use the last known value for fullName
  const fullName = useMemo(() => {
    return slowName(name, surName);
  }, [name, surName]);

  const onNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const onSurNameChange = (e) => {
    e.preventDefault();
    setSurName(e.target.value);
  };

  return (
    <div className="double">
      <div>
        <button
          className="lessermargined"
          onClick={() => {
            if (color === "light") {
              setColor("dark");
            } else {
              setColor("light");
            }
          }}
        >
          Change Color
        </button>
      </div>
      <div className={color}>
        <div className="double margined">
          <div className="column solid lessermargined">
            <div className="row">
              <label className="lessermargined">Name: </label>
              <input onChange={onNameChange} />
            </div>
            <div className="row">
              <label className="lessermargined">Surname: </label>
              <input onChange={onSurNameChange} />
            </div>
          </div>
          <div className="solid lessermargined">
            <div className="row lessermargined">
              <label className="lessermargined">Full Name:</label>
              <p>{fullName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseMemoExample;
