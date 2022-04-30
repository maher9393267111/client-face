import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Picker from "emoji-picker-react";
import { useMediaQuery } from "react-responsive";
export default function EmojiPickerBackgrounds(

{

text,   
setText,

type2,
setType2,


}


) {

// redux
const { user } = useSelector((user) => ({ ...user}));
const { different:{text1} } = useSelector((different) => ({ ...different }));


 // set input value to redux

 const handleinputChange = (e) => {

  setText(e.target.value);

//text1 from redux send e.target.value to redux

  dispatch({
    type: "SET_TEXT",
    payload: e.target.value
  });


  };






const dispatch = useDispatch();

    const [picker, setPicker] = useState(false);
    const [showBgs, setShowBgs] = useState(false);
    const [cursorPosition, setCursorPosition] = useState();
    const textRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        textRef.current.selectionEnd = cursorPosition;
      }, [cursorPosition]);
      const handleEmoji = (e, { emoji }) => {
        const ref = textRef.current;
        ref.focus();
        const start = text.substring(0, ref.selectionStart);
        const end = text.substring(ref.selectionStart);
        const newText = start + emoji + end;
        setText(newText);
        setCursorPosition(start.length + emoji.length);
      };





  return (

    <div className={type2 ? "images_input" : ""}>
      <div>
        {type2 ? 'type 2 is true' : 'type 2 is false'}
      </div>
    <div className={!type2 ? "flex_center" : ""}>
      <textarea
        ref={textRef}
        maxLength="100"
        value={text}
        placeholder={`What's on your mind, ${user && user.first_name}`}
        className={`post_input ${type2 ? "input2" : ""}`}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </div>
    <div className={!type2 ? "post_emojis_wrap" : ""}>
      {picker && (
        <div
          className={`comment_emoji_picker ${
            type2 ? "movepicker2" : "rlmove"
          }`}
        >
          <Picker onEmojiClick={handleEmoji} />
        </div>
      )}
      {!type2 && <img src="../../../icons/colorful.png" alt="" />}
      <i
        className={`emoji_icon_large ${type2 ? "moveleft" : ""}`}
        onClick={() => {
          setPicker((prev) => !prev);
        }}
      ></i>
    </div>
  </div>


  )



  
  
}
