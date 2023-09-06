
import React, { useState } from "react";

function Sushi({sushi, onEatSushi}) {
  const [isEaten, setIsEaten]=useState(false)

  function toggleIsEaten(){
    if(!isEaten){
    setIsEaten(true)
    onEatSushi(sushi.price)
    }
  }


  return (
    <div className="sushi">
      <div className={`plate ${isEaten? "eaten":null}`} onClick={toggleIsEaten}>
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
