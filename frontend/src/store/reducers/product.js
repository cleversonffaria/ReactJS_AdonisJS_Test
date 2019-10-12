const INITIAL_STATE = {
  data: ["MODEM","OLT","WIFI"],
  activeCourse: true
};

export default function product(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        data: [...state.data, action.title]
      };
    default:
      return state;
  }
}
