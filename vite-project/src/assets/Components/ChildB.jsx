import { useContext } from "react";
import { FirstName } from "../../App";
import ChildC from "./ChildC";
import { Theme } from "C:/Users/HP/Desktop/React Practice/contextApi/vite-project/src/App";
const ChildB = () => {
  const name = useContext(FirstName);
  const color = useContext(Theme);
  return (
    <div>
      <p>I am ChildB</p>
      {/* <p style={{ backgroundColor: color }}>Child B DATA: {name}</p> */}
      <p>Child B DATA: {name}</p>
      <ChildC></ChildC>
    </div>
  );
};
export default ChildB;
