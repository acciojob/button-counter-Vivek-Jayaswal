import React, { useState } from "react";

const App = () => {

  const [count,setCount] = useState(0);

  const increment = () => {
    setCount(count+1);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <p>`Button clicked {count} times`</p>
        <button onClick={increment}>Click me</button>
    </div>
  )
}

export default App