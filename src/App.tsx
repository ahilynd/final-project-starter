import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App(): JSX.Element {

    // Takes array of counter setters and sets each to 0
    function zeroCounter(setCounters: {(setVal: number): void}[] ): void {
        for (let i = 0; i < setCounters.length; i++) {
            setCounters[i](0);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
          Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
          Learn React
                </a>
            </header>
            {/* <button onClick={zeroCounter}>
                Zero counters
            </button> */}
        </div>
    );
}

export default App;
