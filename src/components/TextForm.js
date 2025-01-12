import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        if(text.trim().length === 0) {
            props.showAlert("Please enter some text and ", "warning");
            return;
        }
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        if(text.trim().length === 0) {
            props.showAlert("Please enter some text", "warning");
            return;
        }
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleCopy = () => {
        if(text.trim().length === 0) {
            props.showAlert("Nothing to copy!", "warning");
            return;
        }
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        if(text.trim().length === 0) {
            props.showAlert("Please enter some text", "warning");
            return;
        }
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleClear = () => {
        if(text.trim().length === 0) {
            props.showAlert("Nothing to clear!", "warning");
            return;
        }
        setText('');
        props.showAlert("Text cleared!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        value={text} 
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode==='dark'?'#13466e':'white',
                            color: props.mode==='dark'?'white':'#042743'
                        }}
                        id="myBox" 
                        rows="8"
                        placeholder="Enter text here"
                    ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>
        </>
    )
}