import { useContext } from "react";
import { FirstName } from "C:/Users/HP/Desktop/React Practice/contextApi/vite-project/src/App";
import { Theme } from "C:/Users/HP/Desktop/React Practice/contextApi/vite-project/src/App";

const ChildD = () => {
  const name = useContext(FirstName);
  const color = useContext(Theme);
  return (
    <div>
      <p>I am ChildD</p>
      {/* <p style={{ backgroundColor: color }}>Child D Data:{name}</p> */}
      <p>Child D Data:{name}</p>
    </div>
  );
};
export default ChildD;
