import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_STREAMS":
      // mapKeys creates an object from array of objects and sets key to second arg
      // in this case sets new streams to obj with key of 'id'
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "FETCH_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "CREATE_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "EDIT_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_STREAM":
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
