import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }
  async function launch() {
    const win = window.open(
      "https://app.sellergeni.com/login?autopilot=true",
      "_self"
    );
    if (win != null) {
      win.focus();
    }
  }
  useEffect(() => {
    launch();
  }, []);
  return (
    <div className="container">
      <h1>Welcome to Autopilot Desktop!</h1>

      <p>Click on Launch to get started.</p>

      <div className="row">
        <div>
          <button
            type="button"
            onClick={() => {
              launch();
            }}
          >
            Launch
          </button>
        </div>
      </div>

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
