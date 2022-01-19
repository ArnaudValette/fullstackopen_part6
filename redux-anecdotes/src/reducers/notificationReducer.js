const notificationReducer = (state= "", action) => {
    switch(action.type){
        case "SET_NOTIF" : 
            return action.notification
        case "RM_NOTIF" :
            return ""
        default :
            return state
    }
}

export const setNotif = (notification, time) => {
    return async dispatch => {
        
        dispatch({
            type : "SET_NOTIF",
            notification 
        })
        setTimeout(()=>{
            dispatch(rmNotif())
        }, time * 1000 )
    }
     
}
export const rmNotif = () => {
    return{
        type:"RM_NOTIF"
    }
}

export default notificationReducer