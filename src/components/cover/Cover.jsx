import { useEffect } from "react";
import { useState } from "react";
import "./cover.scss";
const Cover=()=>{
  let string="Education for you and me today, will make a better world tomorrow.";
  // for you and me today, will make a better world tomorrow.
  const [text,setText]=useState("E");
  const [index,setIndex]=useState(1);
  const [reversed,setReversed]=useState(false);
  useEffect(()=>{
    setTimeout(() => {
      if(reversed){
        
        setText(string.slice(0,index))
        setIndex(index-1);
        setReversed((index===1)?false:true);
      }
      else{
        setText(string.slice(0,index));
        setIndex(index+1);
        setReversed((index===string.length-1)?true:false);

      }
        }, 70);
   });
    return(
        <div className="Cover">
          <div className="descContainer">
              <span>{text}</span>
              <div className="btnContainer">
              </div>
          </div>
        </div>
    )
}
export default Cover;