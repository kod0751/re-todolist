import React from "react";
import Hello from "./Hello";

function App() {

  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }

  return (
    <div>
      <Hello name="react" color="red"/>
      <div style={style}>{name}</div>
    </div>
  );
}

export default App;
