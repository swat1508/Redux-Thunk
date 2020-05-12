//import React from 'react'
import React,{useState} from 'react'
import {buyCake} from '../redux/index';
import {connect} from 'react-redux';

function NewCakeContainer(props) {
    console.log('props ==> ' , props);
    const [number,setNumber] = useState(1);
    return (
        <div>
            <hr/>
            <h3> Actions payload - to buy more than 1 item on button click</h3>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <input type='text' value={number} onChange={e=> setNumber(e.target.value)} />
{/*          <button onClick={props.buyCake}> Buy Cake </button>    */}
            <button onClick={() => props.buyCake(number)}> Buy {number} Cakes </button>
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
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)
