import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../../redux/iceCreame/iceCreameAction'

const IceCreameContainer = (props) => {
  return (
    <div>
        <h2>Num of Ice Creame - {props.numOfIceCream}</h2>
        <button onClick={props.buyIceCream}>Buy Ice Creame</button>
    </div>
  )
}

const mapStateToProps=state=>{
    return{
        numOfIceCream:state.iceCreame.numOfIceCream
    }
}

const mapReducerToProps=dispatch=>{
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapReducerToProps)(IceCreameContainer)