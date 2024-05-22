
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

const IceCreamView = () => {
  const [restock, setRestock] = useState(0)
  const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Num of Ice Creame :- {numOfIceCream>0?numOfIceCream:0}</h2>
      <button onClick={() => dispatch(ordered())}>Ordered</button>
      <div>
        <input type="number" value={restock} onChange={(e) => setRestock(parseInt(e.target.value))} />
        <button onClick={() => dispatch(restocked(restock))}>Restocked</button>
      </div>
    </div>
  )
}

export default IceCreamView