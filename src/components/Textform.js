import React, { useState } from 'react'

export default function Textform(props) {
    const[text, setText] = useState("");

    const handleUpClick = () => {
        console.log("handleUpClick was clicked");
        setText ("Rohan is Gay");
    }
    const handleOnChange = (event) => {
        console.log("onChange");
        setText(event.target.value);
    }

    return (
        <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="floatingTextarea" rows="10"></textarea>    
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>Change Text</button>
    </div>
  );
}
