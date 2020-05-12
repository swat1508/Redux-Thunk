import React,{useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchUsers} from '../redux/user/userActions';

function UserContainer({userDetails,fetchUserz}) {
    console.log('2 . User - container');
    
    useEffect(() => {
            console.log('3 . User - container - useEffect !!!');
            fetchUserz()
            
        },[])
    
    return(  
        userDetails.loading 
            ?   
                (<h2>Loading...</h2>)  
            : 
                userDetails.error 
                    ? 
                        (<h2>{userDetails.error}</h2>)
                    :
                        (<div><h2>UserList : </h2>
                        {userDetails.users? userDetails.users.map((user,index) => <p key={index}>{user.name}</p>):null}
                        </div>)
                    )
}

const mapStateToProps = state =>{
    return{
        userDetails: state.myUser
    }
}

const mapDispatchToProps = dispatch  =>{    
    return {        
        fetchUserz : () => dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);
