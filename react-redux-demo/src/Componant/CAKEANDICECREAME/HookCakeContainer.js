import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../../redux/cake/cakeActions'

const HookCakeContainer = () => {
    const numOfCakes= useSelector(state=>state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <>
      <h2>Number Of Cakes - {numOfCakes} </h2>  
      <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </>
  )
}

export default HookCakeContainer