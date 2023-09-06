import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";


function SushiContainer(props) {
  const [sushis, setSushi] =useState([])
  const [currentPage, setCurrentPage]=useState(1)
  const sushiPerPage = 4

    // Calculate the start and end index for the current page
    const startIndex=(currentPage-1)*sushiPerPage
    const endIndex = startIndex + sushiPerPage

     // Get the sushi items to display on the current page
     const sushiToDisplay = sushis.slice(startIndex, endIndex)

     const handleNextPage=()=>{
      setCurrentPage((prevPage)=>prevPage+1)
     }

     




  useEffect(()=>{
    fetch("http://localhost:3001/sushis")
    .then(r=>r.json())
    .then(data=>setSushi(data))
    .catch(error=>console.log(error))
  },[setSushi])


  return (
    <div className="belt">
       {sushiToDisplay.map((sushi)=>{
        return(
          <Sushi sushi={sushi} key={sushi.id}/>
        )
       })}
      {sushiToDisplay.length<sushiPerPage?null:(
        <MoreButton onHandleNextPage={handleNextPage} />
      )}
   
    </div>
  );
}

export default SushiContainer;
