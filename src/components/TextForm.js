import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    // Calculate word count properly handling empty text
    const wordCount = text.trim().length > 0 ? text.trim().split(/\s+/).length : 0;
    const readingTime = wordCount * 0.008;

    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        value={text} 
                        onChange={handleOnChange}
                        id="myBox" 
                        rows="8"
                        placeholder="Enter text here"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{wordCount} words and {text.length} characters</p>
                <p>{readingTime.toFixed(2)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}