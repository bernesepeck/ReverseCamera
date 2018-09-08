const wordsReducer = (state = [], action) => {
  let newState
    switch (action.type) {
      case 'ADD_WORDS':
        return newSate = action.payload
      default:
        return state
    }
}
export default wordsReducer