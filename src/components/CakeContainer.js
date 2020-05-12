import React from 'react'
import {buyCake} from '../redux/index';
import {connect} from 'react-redux';

function CakeContainer(props) {
    console.log('props ==> ' , props);
    return (
        <div>
            <hr/>
            <h3>Using Connect with (mapStateToProps and mapDispatchToProps) </h3>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}> Buy Cake </button>
            <hr/>
        </div>
    )
}


const mapStateToProps = state => {     //gets redux state as param and return an object - state is mapped to component props
    return {
        numOfCakes:state.myCake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => { //redux dispatch as param- map dispatch to action
    return{
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
