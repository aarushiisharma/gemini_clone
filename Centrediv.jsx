import compassIcon from "./assets/compass_icon.png";
import bulbIcon from "./assets/bulb_icon.png";
import messageIcon from "./assets/message_icon.png";
import codeIcon from "./assets/code_icon.png";
import userIcon from "./assets/user_icon.png";
import geminiIcon from "./assets/gemini_icon.png";
import Inputbox from "./Inputbox";
import { useState } from "react";

export default function Centrediv({setrecent}) {
  const [text, settext] = useState("");
  const [result,setresult]=useState("")
  const [loading,setloading]=useState(false)

  return (
    <div className="centrediv">
      {!text && (
        <>
          <h1 id="hello">Hello , Dev.</h1>

          <h1 id="how">How can I help you today?</h1>

          <div className="fourdiv">
            <div id="one">
              Suggest beautiful places to see on an upcoming road trip
              <img id="img1" src={compassIcon} />
            </div>

            <div id="two">
              Briefly summarize this concept:urban planning
              <img id="img2" src={bulbIcon} />
            </div>

            <div id="three">
              Brainstrom team bonding activities for our work retreat{" "}
              <img id="img3" src={messageIcon} />
            </div>

            <div id="four">
              Improve the readability of the following code{" "}
              <img id="img4" src={codeIcon} />
            </div>
          </div>
        </>
      )}

      {text && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            height: "600px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              height: "50px",
              minHeight: "50px"
            }}
          >
            <img id="user" src={userIcon}></img>
            <p id="ques">{text}</p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              marginTop: "30px",
              overflowY: "scroll",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            <img id="geminiIcon" src={geminiIcon}></img>
            {
              loading?<div className="loader"><hr/><hr/><hr/></div>:<p id="ans" dangerouslySetInnerHTML={{__html:result}}>
            </p>
            }
          </div>
        </div>
      )}

      <Inputbox onSend={settext} setresult={setresult} setloading={setloading} setrecent={setrecent}/>
    </div>
  );
}
