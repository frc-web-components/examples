import React, { useState, useCallback } from "react";
import { Logger } from "@frc-web-components/react";
import { debounce } from "lodash";

const loggerLevels = ["debug", "info", "success", "warning", "error"];

const LoggerExample: React.FC = () => {
  const [loggerLevel, setLoggerLevel] = useState(loggerLevels[1]);

  const [debug, setDebug] = useState("");
  const updateDebug = useCallback(
    debounce((value: string) => {
      setDebug(value);
    }, 500),
    []
  );

  const [error, setError] = useState("");
  const updateError = useCallback(
    debounce((value: string) => {
      setError(value);
    }, 500),
    []
  );

  return (
    <div>
      <Logger level={loggerLevel} debug={debug} error={error} />
      <div className="inputs">
        <div className="input">
          <label>Logger Level:</label>
          <select
            value={loggerLevel}
            onChange={(ev) => setLoggerLevel(ev.target.value)}
          >
            {loggerLevels.map((level) => (
              <option key={level}>{level}</option>
            ))}
          </select>
        </div>
        <div className="input">
          <label>Debug:</label>
          <input
            type="text"
            placeholder="Type in debug..."
            onChange={(ev) => updateDebug(ev.target.value)}
          />
        </div>
        <div className="input">
          <label>Error:</label>
          <input
            type="text"
            placeholder="Type in error..."
            onChange={(ev) => updateError(ev.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default LoggerExample;
