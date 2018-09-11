//Reducer to save Images to store
const imageReducer = (state = [], action) => {
  let newState
    switch (action.type) {
      case 'ADD_IMAGE':
        return newSate = action.payload
      default:
        return state
    }
}
export default imageReducer