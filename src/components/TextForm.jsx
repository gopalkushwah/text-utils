import React, { useState } from 'react'
function TextForm(props) {
    const [text, setText] = useState('');
    const [condition, setCondition] = useState(0);

    const handleUpClick = () => {
        setText(text.toUpperCase());
        setCondition(100);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLwClick = () => {
        setText(text.toLowerCase());
        setCondition(100);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleCapitalizeClick = () => {
        setText(text.toLowerCase());
        setCondition(0);
        props.showAlert("Converted to Capitalize", "success");
    }
    const handleStrikethroughClick = () => {
        setCondition(1);
        props.showAlert("Line Through done", "success");

    }

    const handleClearClick = () => {
        setText('');
        setCondition(100)
        props.showAlert("Text Aria Cleared", "success");
    }
    const removeExtraSpaces = () => {

        setText(text.split(/[ ]+/).join(" "));
        setCondition(100)
        props.showAlert("Removed Extra Spaces", "success");


    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="mb-3 container">
                <h2 className='m-3 mx-0'>Enter your text here</h2>
                <textarea
                    className={condition === 0 ? "form-control capitalize" : condition === 1 ? "form-control strikethrough" : "form-control"}
                    value={text}
                    id="exampleFormControlTextarea1"
                    placeholder='Enter your text here....'
                    onChange={handleChange} rows="8"
                    style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white', }}
                ></textarea>

                <button type="button" className="btn btn-primary my-2  mx-1" onClick={handleUpClick}>UpperCase</button>

                <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleLwClick}>LowerCase</button>

                <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleCapitalizeClick}>Capitalize</button>

                <button
                    type="button"
                    className="btn btn-primary my-2 mx-1"
                    onClick={() => {
                        window.navigator.clipboard.writeText(text);
                        props.showAlert("Copied to clipboard", "success");
                    }}
                >
                    Copy
                </button>

                <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleStrikethroughClick}>Strikethrough</button>

                <button type="button" className="btn btn-primary my-2 mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleClearClick}>Clear</button>
            </div >
            <div className="container">
                <h2>Your Text Summry</h2>
                <p>{text.split(" ").length - 1} Words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter your text above to preview it here...'}</p>
            </div>
        </>
    )
}

export default TextForm