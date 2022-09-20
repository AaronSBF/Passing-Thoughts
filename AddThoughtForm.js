import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState("")

  let handleTextChange = (event) =>{ 
    
    setText(event.target.value)
  }
let handleSubmit = (event)=>{ 
  event.preventDefault();

  let obj = {
    id: generateId(), text: text, expiresAt:getNewExpirationTime()
  }

  if(text.length >0){ 
  props.addThought(obj);
  setText("");
}
}


  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
