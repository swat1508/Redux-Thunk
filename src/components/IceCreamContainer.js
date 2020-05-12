import React from 'react'
import {buyIceCream} from '../redux/index';
import {connect} from 'react-redux';
import { BUY_ICECREAM } from '../redux/icerCream/iceCreamTypes';

function IceCreamContainer(props) {
    console.log('props ==> ' , props);
    return (
        <div>
            <hr/>
            <h3>Using Connect with (mapStateToProps and mapDispatchToProps) </h3>
            <h2>Number of IceCream - {props.numOfIceCreamz}</h2>
            <button onClick={props.buyIceCreamz}> Buy IceCream </button>
            <hr/>
        </div>
    )
}


const mapStateToProps = state => {     //gets redux state as param and return an object - state is mapped to component props
    return {
        numOfIceCreamz:state.myIceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => { //redux dispatch as param- map dispatch to action
    return{
        buyIceCreamz: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
