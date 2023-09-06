
import React, { useState } from "react";

function Sushi({sushi, onEatSushi, remainingBudget}) {
  const [isEaten, setIsEaten]=useState(false)

  function toggleIsEaten(){
    if(!isEaten && sushi.price <=remainingBudget){
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
      <button 
      className="eat-button"
      onClick={toggleIsEaten}
      disabled={sushi.price>remainingBudget}
      >
        Eat
      </button>
    </div>
  );
}

export default Sushi;
