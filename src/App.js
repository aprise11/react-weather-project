import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Liepāja" />
        <footer className="mt-2">
          This project was coded by{" "}
          <a
            href="https://prismatic-panda-2ddff3.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Agneta Prise
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/aprise11/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
