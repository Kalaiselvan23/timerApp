import React, { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import { BsSkipEnd } from "react-icons/bs";

const Progressbar = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(30);
  var style = {
    backgroundImage: `conic-gradient(blue ${3.16 * ((seconds) + (minutes * 60))}deg,white ${3.16 * ((seconds) + (minutes * 60))}deg)`,
  }; 

  useEffect(() => {
    let timer = setInterval(() => {
      if (seconds === 0 && minutes === 0) {
        clearInterval(timer);
      } else if (seconds > 59) {
        let min = parseInt(seconds / 60);
        let sec = seconds % 60;
        setMinutes(() => min);
        setSeconds(() => sec);
      } else if (seconds === 0) {
        setMinutes((min) => min - 1);
        setSeconds(59);
      } else {
        setSeconds((sec) => sec - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes]);

  const increaseTime = () => {
    setSeconds((prev) =>{
        if(prev+10<60)
        {
            return prev+10;
        }
        else
        {
            let newSec=(prev+(minutes*60)+10)
            setMinutes(()=>parseInt(newSec/60))
            return newSec%60;
            
        }
    });
  };
  const handleSkip = () => {
    setSeconds(() => 0);
    setMinutes(() => 0);
  };
  return (
    <div>
      <div
        className="bg-[#693F77] w-64 h-64 rounded-full mx-auto p-2"
        style={style}
      >
        <p className="bg-white w-full h-full rounded-full flex justify-center items-center font-bold text-[40px] border-2 ">
          <span>{minutes<10?"0"+minutes:minutes}</span>:<span>{seconds<10?"0"+seconds:seconds}</span>
        </p>
      </div>
      <div className="flex justify-between w-[60%] mx-auto my-6">
        <button className="action-btns" onClick={() => increaseTime()   }>
          <MdAdd />
          <span>10 sec</span>
        </button>
        <button className="action-btns" onClick={() => handleSkip()}>
          <BsSkipEnd />
          <span>Skip</span>
        </button>
      </div>
    </div>
  );
};

export default Progressbar;
