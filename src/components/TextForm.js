import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked"); 
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = () =>{
        // console.log("Uppercase was clicked"); 
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert("Converted to lowercase!", "success")
    }

    const handleclearClick = () =>{
        // console.log("Uppercase was clicked"); 
        let newText = '';
        setText(newText); 
    }

    const handleOnChange = (event) =>{
        // console.log("On change"); 
        setText(event.target.value);
        // debugger;
    }
    // function handleOnChange(event) {
    //     setText(event.target.value);
    // }

    
    // const a = "abc";
    
    const [text, setText] = useState('Enter text here');
    console.log("page reloaded.");
    // handleUpClick();

    return (
        <>
        <div className="container" style={{color: props.mode=== 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white', color: props.mode=== 'dark'?'white':'#042743'}} id="myBox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'#042743'}} >
            <h1>your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
        </>
     )
}
 