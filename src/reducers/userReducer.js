export default function(state={},action){
    console.log(action)
    switch(action.type){
        case 'userInfo':
            return {
                data:action.playload.data
            }
        default:
            return state
    }
}