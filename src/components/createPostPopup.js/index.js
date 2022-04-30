import { useEffect, useRef, useState } from "react";
import "./style.css";
import AddToYourPost from "./addToYourPost";
import ImagePreview from "./ImagePreview";
import {useSelector} from "react-redux";
import { useMediaQuery } from "react-responsive";
import Picker from "emoji-picker-react";
import EmojiPickerBackgrounds from "./EmojiPickerBackgrounds";
import different from "../../reducers/different";
export default function CreatePostPopup({  }) {
  const [text, setText] = useState("");
  const [showPrev, setShowPrev] = useState(false);
  const [picker, setPicker] = useState(false);
  const textRef = useRef(null);
  const [type2, setType2] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();


  //change showprev
  const handleShowPrev = () => {
    setShowPrev(!showPrev);
  };


  // user from redux

  const { user } = useSelector((user) => ({ ...user }));


  const { different:{text1} } = useSelector((different) => ({ ...different }));



  
  console.log(text);
  return (
    <div className="blur-modal">
    <div className="postBox">
      <div className="box_header">
        <div className="small_circle">
          <i className="exit_icon"></i>
        </div>
        <span onClick={handleShowPrev} >Create Post {text1}</span>
      </div>
      <div className="box_profile">
        <img src={user && user.picture} alt="" className="box_profile_img" />
        <div className="box_col">
          <div className="box_profile_name">
            { user &&  user.first_name} { user && user.last_name}
          </div>
          <div className="box_privacy">
            <img src="../../../icons/public.png" alt="" />
            <span>Public</span>
            <i className="arrowDown_icon"></i>
          </div>
        </div>
      </div>

      {!showPrev ? (
        <>
          <EmojiPickerBackgrounds
            text={text}
          type2={type2}
            setText={setText}
            showPrev={showPrev}
          />
        </>
      ) : (
        <ImagePreview
          text={text}
          user={user}
          setText={setText}
          showPrev={showPrev}
        />
      )}
      <AddToYourPost />
      <button className="post_submit">Post</button>
    </div>
  </div>
  );
}
