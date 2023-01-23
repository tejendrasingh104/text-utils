import React,{useState} from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('uppercase btn clicked')
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClear = () => {
        let newText = ""
        setText(newText);
    }
    const handleRemoveExtraSpace = () => {
        let newText = text.trim().split(' ').filter(word=>word!=='').join(' ')
        setText(newText);
    }
    const handleOnChange = (e) => {
        // console.log('onchange clicked')
        setText(e.target.value)
    }

  const [text, setText] = useState('');


  return (
    <>
        <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea 
                className="form-control" 
                value={text} 
                placeholder={'enter your text'} 
                onChange={handleOnChange} 
                id='mybox' 
                rows='8' 
                style={{
                    backgroundColor:props.mode === 'light'?'white':'grey', 
                    color:props.mode === 'dark'?'white':'black'
                }}
            >
            </textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
            <button className="btn btn-primary mx-1" onClick={handleRemoveExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-2" style={{color:props.mode === 'dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(' ').filter(x => x!== '').length} words and {text.length} character</p>
            <p>{0.008*text.split(' ').filter(x => x!== '').length} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something in text area to preview it here'}</p>
        </div>
    </>
  
  );
}
