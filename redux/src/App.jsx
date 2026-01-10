import { useDispatch} from "react-redux";
import { useSelector} from "react-redux";
import { byvalue, decrenmet, increnment } from "./features/Counterslice";
import { useState } from "react";
const App = () => {

  const dispatch = useDispatch()
  const select = useSelector((state)=>state.counter.value)

  const [num, setnum] = useState(5)

  

  return (
    <div>
      <h1>{select}</h1>
      <button onClick={()=>{
        dispatch(increnment())
      }}
      >increase</button>
      <button
      onClick={()=>{
        dispatch(decrenmet())
      }}>decrease</button>
      <button
      onClick={()=>{
        dispatch(byvalue(Number(num)))
      }}>decrease</button>
      <input type="number" value={num}
      onChange={(e)=>{
        setnum(e.target.value)
      }} />
    </div>
  )
}

export default App