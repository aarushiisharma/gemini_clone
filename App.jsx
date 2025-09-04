import { useState } from "react";
import Centrediv from "./Centrediv";
import Sidebar from "./Sidebar";
import userIcon from "./assets/user_icon.png";

export default function App() {
  const [open, setopen] = useState(false);
  const [recent,setrecent]=useState([])
  return (
    <div className="container">
      <img
        style={{
          width: "40px",
          position: "absolute",
          right: "20px",
          top: "20px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        src={userIcon}
      ></img>
      <Sidebar open={open} setopen={setopen} recent={recent} />
      <div className="seconddiv">
        <div
          style={{
            marginLeft: open ? "160px" : "80px",
          }}
          id="gemini"
        >
          Gemini
        </div>
        <Centrediv setrecent={setrecent} />
      </div>
    </div>
  );
}
