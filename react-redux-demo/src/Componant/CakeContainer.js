import React from 'react'
import { buyCake } from '../redux/cake/cakeActions'
import { connect } from 'react-redux'

function CakeContainer(props) {
  return (
    <>
      <h2>Number Of Cakes - {props.numOfCakes}</h2>  
      <button onClick={props.buyCake}>Buy Cake</button>
    </>
  )
}

const mapStateToProps = state =>{
    return{
        numOfCakes:state.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake:()=> dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer) 
