import React, {useState} from 'react'

export default function TextForm(props) {
   
    const handleUpClick = () =>{
           // console.log("Uppercase was clicked" + text);
            let newText = text.toUpperCase();
           
            setText(newText)
            props.showAlert("Converted to uppercase","success");
    }

    const handleLowClick = () =>{
         let newText = text.toLowerCase();
         setText(newText)
         props.showAlert("Converted to lowercase","success");

    }

    const handleClearClick = () =>{
         let newText = ('');
         setText(newText)
         props.showAlert("Text cleared","success");

    }

    const handleOnChange = (event)=>{
            //console.log("On Change");
            setText(event.target.value);
    }

    const handleCopy = () =>{
        console.log("i am a copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success");

    }

    const handleSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed","success");

    }


    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value = {text} onChange={handleOnChange} 
                    style={{backgroundColor: props.mode==='dark'?'grey':'white',
                     color:  props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>       
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-1" onClick={handleSpaces}>Remove extra spaces</button>

            </div>
            

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} word and {text.length} charracters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something in the text box to preview here"}</p>
            </div>
            </>
            )
}
