import { cloneElement } from "react";
import { Children } from "react";
import "./sidebar.css";

const SideBar = ({ children }) => {
  const usableChildren = Children.toArray(children);

  return (
    <>
      <div className="sidenav">
        {Children.map(usableChildren, (child, index) => (
          <div key={index}>{cloneElement(child)}</div>
        ))}
      </div>
    </>
  );
};

export default SideBar;
