let initialState = {
    playerIdArray: []
}

export const reducer = ( state = initialState , action ) =>{
    const { type , payload } = action 
    switch(type){
        case  'INSERT_ID' :
            let arr = [...state.playerIdArray]
            const indexOfValue = arr.indexOf(payload)
            indexOfValue === -1 ? arr.push(payload) : arr.splice(indexOfValue,1)
            return {...state,playerIdArray:arr}
            case  'CLEAR' :
                return { ...state ,playerIdArray:initialState.playerIdArray }
        default:
           return state
    }
}
