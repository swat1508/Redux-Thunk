import React from 'react';
import {connect} from 'react-redux';
import {buyCake,buyIceCream} from '../redux/index';


function ItemContainer(props) {
    console.log('ItemContainer - props ==>> ' , props);
    return (
        <div>
            <hr/>
            <h1>Item- Container - Cake passed from App then cake else ice-cream</h1>
            <p>
                {
                props.itemDisplay==='cake' ? <span> Need to display Cake</span> : <span> Need to display IceCream</span>
                }
                <br/>
            </p>
            <h2>Item : {props.item} </h2>
            <button onClick={props.buyItem}> Buy Items </button>
            <hr/>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => {
    const itemState = ownProps.itemDisplay=='cake' ? state.myCake.numOfCakes : state.myIceCream.numOfIceCreams;
    return {
        item: itemState
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    const dispatchFunction = ownProps.itemDisplay==='cake' ? ()=>dispatch(buyCake())  : ()=>dispatch(buyIceCream())

    return {
        buyItem : dispatchFunction
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);


