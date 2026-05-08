import { useEffect, useState } from "react"

function Ex_UseEffect() {

   const[count,setCount] = useState(0)
   
     useEffect(()=>{
       console.log("Button is Clicked")
     },[count])
   
     return (
       <>
        <h1>Count :{count}</h1> 
        <button onClick={()=> setCount(count+1)}>+</button>
   
       </>
  )
}
export default Ex_UseEffect