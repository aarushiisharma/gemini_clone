import micIcon from "./assets/mic_icon.png";
import galleryIcon from "./assets/gallery_icon.png";
import sendIcon from "./assets/send_icon.png";
import { useState } from "react";
import { URL } from "./constants";

export default function Inputbox({ onSend, setresult, setloading, setrecent }) {
  const [text, setText] = useState("");

  const handleSend = async () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
    setloading(true);
    setresult("");
    setrecent((prev) => [...prev, text]);

    const payload = {
      contents: [{ parts: [{ text }] }],
    };

    try {
      let response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      response = await response.json();
      const fulltext = response.candidates[0].content.parts[0].text;
      let formattedtext = fulltext.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

  
      const words = formattedtext.split(" ");
      setresult(words[0]+" ")
      let i = 0;
      const typinginterval = setInterval(() => {
        setresult((prev) => prev + words[i] + " ");
        i++;
        if (i >= words.length-1) clearInterval(typinginterval);
      }, 20); 

      console.log(fulltext);
    } catch (err) {
      setresult("something went wrong");
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="input-box">
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        className="input"
        type="text"
        placeholder="Enter a prompt here"
      />

      {text ? (
        <>
          <img style={{ right: "77px" }} id="gallery" src={galleryIcon} />
          <img style={{ right: "50px" }} id="mic" src={micIcon} />
          <img
            id="send"
            src={sendIcon}
            onClick={handleSend}
            style={{ cursor: "pointer" }}
          />
        </>
      ) : (
        <>
          <img id="gallery" src={galleryIcon} />
          <img id="mic" src={micIcon} />
        </>
      )}

      <p className="para">
        Gemini may display inaccurate info, including about people, so
        double-check its responses. Your privacy and Gemini Apps
      </p>
    </div>
  );
}
