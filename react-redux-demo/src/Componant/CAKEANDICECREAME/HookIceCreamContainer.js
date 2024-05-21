import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../../redux/iceCreame/iceCreameAction'

const HookIceCreamContainer = () => {
    const numOfIceCream = useSelector(state => state.iceCreame.numOfIceCream) 
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Num of Ice Cream : {numOfIceCream}</h2>
        <button onClick={()=>{dispatch(buyIceCream())}}>Buy Ice Cream</button>
    </div>
  )
}

export default HookIceCreamContainer