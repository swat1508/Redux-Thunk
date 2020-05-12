import {BUY_CAKE} from './cakeTypes.js';
/*
export const buyCake = () =>{
    return {
        type:BUY_CAKE
    }
}*/

export const buyCake = (number=1) =>{
    return {
        type:BUY_CAKE,
        payload:number
    }
}

