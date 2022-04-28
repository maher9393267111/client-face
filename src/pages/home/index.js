import Header from "../../components/header";
import { useEffect,useRef,useState } from "react";
import './style.css'
export default function Home() {

// click outside hide div

const helloRef = useRef(null);

const [show, setShow] = useState(true);


useEffect(() => {

  const handleClickOutside = (event) => {

// if the click is outside of the div with class outside, hide the div
    if (helloRef.current && !helloRef.current.contains(event.target)) {

      console.log("helloRef.current",helloRef.current);
      setShow(false);

    }

  };

  document.addEventListener("mousedown", handleClickOutside);

  // return () => {

  //   document.removeEventListener("mousedown", handleClickOutside);

  // };


}, [helloRef]);


  return (
    <div>
      <Header />

  

    </div>
  );
}




// {show &&  <div className="outside"  ref={helloRef}>

// </div>