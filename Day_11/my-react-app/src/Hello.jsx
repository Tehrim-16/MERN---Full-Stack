import { useState } from "react";


function Hello() {

    const[isLogin,SetIsLogin] = useState(false);


  return (
    <div>
      {isLogin ? <h1>Welcome</h1> : <h1>Please Login</h1>}
    </div>
  )
}
export default Hello;