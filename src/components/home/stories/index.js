import { ArrowRight, Plus } from "../../../svg";
import "./style.css";
import { stories } from "../../../data/home";
import Story from "./Story";
import { useMediaQuery } from "react-responsive";
export default function Stories() {


//splice(0,4) when screen size is less than 1030px

const query1175px = useMediaQuery({
  query: "(max-width: 1075px)",
});
const query1030px = useMediaQuery({
  query: "(max-width: 1030px)",
});

const query1200px = useMediaQuery({
  query: "(max-width: 1200px)",
});
const max = query1030px ? 3 : query1175px ? 2 : query1200px? 4 : stories.length;




  return (
    <div className="stories">
      <div className="create_story_card">
        <img
          src="../../../images/default_pic.png"
          alt=""
          className="create_story_img"
        />
        <div className="plus_story">
          <Plus color="#fff" />
        </div>
        <div className="story_create_text">Create Story</div>
      </div>
      {stories.slice(0, max).map((story, i) => (
        <Story story={story} />
      ))}
      <div className="white_circle">
        <ArrowRight color="#65676b" />
      </div>
    </div>
  );
}
