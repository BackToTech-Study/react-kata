import { useState } from "react";
import { BackgroundContext } from "./context";
import ContextComponent from "./contextcomponent";

const UseContextExample = () => {
  const [background, setBackground] = useState("light");
  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      <ContextComponent />
    </BackgroundContext.Provider>
  );
};
export default UseContextExample;
