import { useRef } from "react";

function UseRef_ex() {
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <div style = {{padding: "20px"}}>
            <h1>UseRef Example</h1>

            <input type="text" ref={inputRef} placeholder="Enter your name: "/>
            <br />
            <br />

            <button onClick={focusInput}>Focus Input</button>
        </div>
    )
}

export default UseRef_ex