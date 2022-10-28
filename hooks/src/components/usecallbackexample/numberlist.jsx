import { useEffect } from "react";
import { useState } from "react";

const NumberList = ({ getNumbers }) => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(getNumbers());
    console.log("Updated Items");
  }, [getNumbers]);

  return (
    <>
      {numbers.map((number) => {
        return (
          <div key={number} className="lessermargined">
            {number}
          </div>
        );
      })}
    </>
  );
};

export default NumberList;
