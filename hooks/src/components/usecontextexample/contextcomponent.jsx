import { useContext } from "react";
import "../style.css";
import { BackgroundContext } from "./context";

const ContextComponent = () => {
  const { background, setBackground } = useContext(BackgroundContext);

  const onThemeClick = () => {
    if (background === "light") {
      setBackground("dark");
    } else {
      setBackground("light");
    }
  };

  return (
    <div className="double">
      <div className={background}>
        <div className={"solid"}>
          <button className="lessermargined" onClick={onThemeClick}>
            Change Theme
          </button>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContextComponent;
