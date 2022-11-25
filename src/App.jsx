import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {

  async function launch() {
    // this is backup incase config.json fails
    const win = window.open(
      "https://app.sellergeni.com/login?autopilot=true",
      "_self"
    );
    if (win != null) {
      win.focus();
    }
  }
  useEffect(() => {
    // launch();
  }, []);
  return (
    <div className="container">
      <h1>Welcome to SellerGeni's Autopilot Desktop!</h1>

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
    </div>
  );
}

export default App;
