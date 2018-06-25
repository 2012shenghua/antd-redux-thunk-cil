export default function counter(state = 10, action) {
	switch (action.type) {
		case 'ADD':
			return state+1
		default:
			return state
	}
}

