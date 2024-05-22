
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './cakeSlice'
const CakeView = () => {
  const [restock, setRestock] = useState(0)
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Num of Cakes :- {numOfCakes>0?numOfCakes:0}</h2>
      <button onClick={() => dispatch(ordered())}>Ordered</button>
      <div>
        <input type="number" value={restock} onChange={(e) => setRestock(parseInt(e.target.value))} />
        <button onClick={() => dispatch(restocked(restock))}>Restocked</button>
      </div>
    </div>
  )
}

export default CakeView
