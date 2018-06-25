// export default function addfunc() {
// 	return{
// 		type:'ADD'
// 	}
// }

function add() {
		return{
			type:'ADD'
		}
	}

export default function addfunc() {
	return function(dispatch,getState){
		setTimeout(()=>{
				dispatch(add())
		},2000)
	}
}