export default function counter(state = 0, action = { payload: 1 }) {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
