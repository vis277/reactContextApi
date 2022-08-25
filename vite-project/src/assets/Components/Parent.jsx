import { useContext } from "react";
import ChildA from "./ChildA";
import { ParentTheme } from "C:/Users/HP/Desktop/React Practice/contextApi/vite-project/src/App";
const Parent = () => {
  const color = useContext(ParentTheme);
  return (
    <div style={{ backgroundColor: color }}>
      <ChildA></ChildA>
    </div>
  );
};
export default Parent;
