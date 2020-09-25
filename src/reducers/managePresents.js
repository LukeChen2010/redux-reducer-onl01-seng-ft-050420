export function managePresents(state, action){
  
<<<<<<< HEAD
  switch(action.type) 
  {
    
    case "INCREASE":
      return Object.assign({}, state, {numberOfPresents: state.numberOfPresents + 1});
      
    default:
      return state;
  }
=======
  switch(action.type) {

    case "INCREASE":
      return Object.assign({}, state, {numberOfPresents: state.numberOfPresents + 1});
>>>>>>> fe419458365f19aa040f50d8a82b0d442197653e
}
