import { useState } from "react";
import { useEffect } from "react";
import "../style.css";
import User from "./user";

const UseEffectExample = () => {
  const [users, setUsers] = useState([]);
  const [numberOfElements, setNumberOfElements] = useState(10);
  const [refresh, setRefresh] = useState(false);

  const onElementNumberChange = (e) => {
    e.preventDefault();
    setNumberOfElements(e.target.value);
  };

  const fetchUsers = () => {
    setNumberOfElements(10);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
    setRefresh(false);
  };

  const onRefresh = (e) => {
    e.preventDefault();
    setRefresh(true);
  };

  useEffect(() => {
    if (refresh) {
      console.log("Fetched Users on refresh");
      fetchUsers();
    }
  }, [refresh, setRefresh]);

  useEffect(() => {
    console.log("Fetched Users on component load");
    fetchUsers();
  }, []);

  return (
    <div className="double">
      <div className="double margined row">
        <label className="lessermargined">Number of elements: </label>
        <input
          id={"numberOfElements"}
          type={"number"}
          min="0"
          value={numberOfElements}
          onChange={onElementNumberChange}
        />
        <button className="lessermargined" onClick={onRefresh}>
          Refresh
        </button>
      </div>
      {users?.slice(0, numberOfElements).map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UseEffectExample;
