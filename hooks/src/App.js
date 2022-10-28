import Layout from "./components/layout";
import SideBar from "./components/layout/sidebar";
import "./app.css";
import { useState } from "react";
import UseStateExample from "./components/usestateexample";
import UseRefExample from "./components/userefexample";
import UseEffectExample from "./components/useeffectexample";
import UseContextExample from "./components/usecontextexample";
import UseMemoExample from "./components/usememoexample";

function App() {
  const [currentRendering, setCurrentRendering] = useState(() => {
    return <h1>This is a React hooks example page</h1>;
  });

  return (
    <>
      <SideBar>
        <button
          className="btn default"
          onClick={() => {
            setCurrentRendering(<UseStateExample />);
          }}
        >
          useState
        </button>
        <button
          className="btn default"
          onClick={() => {
            setCurrentRendering(<UseRefExample />);
          }}
        >
          useRef
        </button>
        <button
          className="btn default"
          onClick={() => {
            setCurrentRendering(<UseEffectExample />);
          }}
        >
          useEffect
        </button>
        <button
          className="btn default"
          onClick={() => {
            setCurrentRendering(<UseContextExample />);
          }}
        >
          useContext
        </button>
        <button
          className="btn default"
          onClick={() => {
            setCurrentRendering(<UseMemoExample />);
          }}
        >
          useMemo
        </button>
      </SideBar>
      <Layout>{currentRendering}</Layout>
    </>
  );
}

export default App;
