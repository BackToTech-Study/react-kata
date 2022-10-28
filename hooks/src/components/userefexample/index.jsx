import { useRef } from "react";
import "../style.css";

const UseRefExample = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    document.getElementById("submitedEmail").textContent =
      emailRef.current.value;
    document.getElementById("submitedPassword").textContent =
      passwordRef.current.value;
  };

  return (
    <div className="double">
      <form className="column margined" onSubmit={onSubmit}>
        <div className="row">
          <label className="margined" htmlFor="email">
            Email
          </label>
          <input id={"email"} type={"email"} ref={emailRef} />
        </div>
        <div>
          <label className="margined" htmlFor="password">
            Password
          </label>
          <input id={"password"} type={"password"} ref={passwordRef} />
        </div>
        <div>
          <button className="margined" type="submit">
            Submit
          </button>
        </div>
        <div className="solid">
          <div className="row">
            <p className="margined">Email:</p>
            <p id="submitedEmail" style={{ fontWeight: "bold" }}></p>
          </div>
          <div className="row">
            <p className="margined">Password:</p>
            <p id="submitedPassword" style={{ fontWeight: "bold" }}></p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UseRefExample;
