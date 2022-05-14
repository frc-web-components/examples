import { useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Some key</td>
            <td>Some value</td>
          </tr>
          <tr>
            <td>Some key</td>
            <td>Some value</td>
          </tr>
          <tr>
            <td>Some key</td>
            <td>Some value</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
