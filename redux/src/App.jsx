import React from 'react'

import { useDispatch} from "react-redux";
import { useSelector} from "react-redux";
const App = () => {

  const dispatch = useDispatch()
  const select = useSelector((state)=>state.counter.value)



  

  return (
    <div>
      <h1>{select}</h1>
      <button>increase</button>
      <button>decrease</button>
    </div>
  )
}

export default App