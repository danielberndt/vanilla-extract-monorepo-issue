import {dsStyles} from "../../ds/dsStyles.css";
import {myStyle} from "./App.css";

export const App = () => (
  <div className={dsStyles.display.flex}>
    <div className={myStyle}>
      <div>2</div>
      <div>Y</div>
    </div>
    <div>C</div>
  </div>
);
