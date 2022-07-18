import React, {useState} from "react";
// import PropTypes from 'prop-types'

export default function TextForm(props) {

  const [text, setText] = useState("");

  const handleOnChange=(event)=>
  {
    console.log("handleOnChange");
    setText(event.target.value);
  }

  //Upper Case
  const handleUpClick = ()=>
  {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  }

  //Lower Case
  const handleLoClick=()=>
  {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  }

  //Clear Text Form
  const handleClearClick=()=>
  {
    let newText ="";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  }

  //Copy Text
  const handleCopy=()=>
  {
    var text = document.getElementById('my-box');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to Clipboard", "success");
  }

  //Handle Extra Spaces
  const handleExtraSpaces= () =>
  {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed from text", "success");
  }

  //Speak Aloud
  const handleSpeakClick=()=>
  {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);  
    props.showAlert("Speaking Aloud", "success");
  }

  return (
      <>
    <div className="mb-3">
      <textarea className={`form-control text-${props.mode ==='light'?'dark':'light'}`}  value={text} onChange={handleOnChange} id="my-box" rows="8" style={{backgroundColor: props.mode ==='light'?'white':'#0a031f'}}></textarea>
      <button className="btn btn-outline-primary my-3" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-outline-primary mx-3 my-3" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-outline-primary" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-outline-danger mx-3 my-3" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-outline-success my-3" onClick={handleSpeakClick}>Speak Aloud</button>
      <button className="btn btn-outline-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className={`container text-${props.mode ==='light'?'dark':'light'}`}>
      <h3>Your text summmary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p> Time Elapsed to read the text: {0.008 * text.split(" ").length} minutes</p>
      <h3>Text Preview</h3>
      <p>{text}</p>
    </div>
    </>
  );
}
