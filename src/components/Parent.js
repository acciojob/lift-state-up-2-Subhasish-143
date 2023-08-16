import { useState } from "react";

import Child from './Child'

const Parent = () => {
    const [inputField,setInputField] = useState("");
    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <p>{inputField}</p>
            <Child inputField={inputField} setInputField={setInputField} />
        </div>
    )
}

export default Parent;