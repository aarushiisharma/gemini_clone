import menuIcon from "./assets/menu_icon.png";
import plusIcon from "./assets/plus_icon.png";
import messageIcon from "./assets/message_icon.png";
import settingIcon from "./assets/setting_icon.png";
import historyIcon from "./assets/history_icon.png";
import questionIcon from "./assets/question_icon.png";


export default function Sidebar({open,setopen,recent}) {
  return (
    <div
      style={{ width: open ? "150px" : "70px", transition: "width 0.3s ease" }}
      className="sidebar"
    >
      <img onClick={() => setopen(!open)} id="menu" src={menuIcon}></img>
      <img id="plus" src={plusIcon}></img>
      <img id="setting" src={settingIcon}></img>
      <img id="history" src={historyIcon}></img>
      <img id="question" src={questionIcon}></img>

      {open && (
        <>
          <div
            style={{
              width: "120px",
              height: "40px",
              margin: "20px auto",
              backgroundColor: "rgba(215, 216, 216, 0.7)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              padding: "0 10px",
              cursor:"pointer"
            }}
          >
            <img
              style={{ width: "20px", marginRight: "10px" }}
              id="plus"
              src={plusIcon}
              alt="plus"
            />
            <p style={{ marginLeft: "25px", color: "grey" }}>New Chat</p>
          </div>

          <p style={{ margin: "20px", fontWeight: "600" }}>Recent</p>
          <ul id="ul">
            {recent.map((item,index)=>(
              <div id="li">
                <img id="imgmsg" src={messageIcon}></img>
                <p id="listitem" key={index}>{item}</p>
              </div>
            ))}
          </ul>

          <div
            style={{
              width: "100px",
              position: "absolute",
              bottom: 0,
              left: 0,
              margin: "0 0 100px 50px",
            }}
          >
            <img id="question" src={questionIcon}></img>
            <p>Help</p>
          </div>

          <div
            style={{
              width: "100px",
              position: "absolute",
              bottom: 0,
              left: 0,
              margin: "0 0 60px 50px",
            }}
          >
            <img id="question" src={questionIcon}></img>
            <p>History</p>
          </div>

          <div
            style={{
              width: "100px",
              position: "absolute",
              bottom: 0,
              left: 0,
              margin: "0 0 20px 50px",
            }}
          >
            <img id="question" src={questionIcon}></img>
            <p>Settings</p>
          </div>
        </>
      )}
    </div>
  );
}
