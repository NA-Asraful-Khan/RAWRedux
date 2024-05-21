import React, { useState } from 'react'
import { buyCake } from '../../redux/cake/cakeActions'
import { connect } from 'react-redux'

function CakeContainer(props) {
  const [cakeNumber,setCakeNumber]=useState(0)
  return (
    <>
      <h2>Number Of Cakes - {props.numOfCakes>0?props.numOfCakes:"0"}</h2>  
      <input type="number" value={cakeNumber} onChange={e=> setCakeNumber(e.target.value)} />
      <button onClick={()=>props.buyCake(cakeNumber)}>Buy {cakeNumber} Cake</button>
    </>
  )
}

const mapStateToProps = state =>{
    return{
        numOfCakes:state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake:(cakeNumber)=> dispatch(buyCake(cakeNumber))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer) 
