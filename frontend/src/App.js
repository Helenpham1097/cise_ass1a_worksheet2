import React, {useState} from "react";

function App() {

    const [count, setCount] = useState(() => 0)

    const increment = () =>{
        setCount(prevState => prevState +1)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button className="increment" onClick={increment}>Increment count</button>
        </div>
    );
}

export default App;
