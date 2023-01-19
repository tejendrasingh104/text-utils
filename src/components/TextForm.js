import React,{useState} from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('uppercase btn clicked')
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (e) => {
        // console.log('onchange clicked')
        setText(e.target.value)
    }

  const [text, setText] = useState('enter your text');


  return (
  <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id='mybox' rows='8'></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>convert to upper case</button>
  </div>
  );
}
