import {Box} from "@mono/ds/Box";
import {myStyle} from "./App.css";

export const App = () => (
  <Box display="flex">
    <div className={myStyle}>
      <div>2</div>
      <div>Y</div>
    </div>
    <Box>3</Box>
    <Box display="flex">
      <div>A</div>
      <div>B</div>
      <div>C</div>
    </Box>
  </Box>
);
