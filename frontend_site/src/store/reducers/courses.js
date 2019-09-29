const INITIAL_STATE = {
  data: ["React"],
  activeCourse: true
};

export default function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_COURSE":
      console.log(state);
      return {
        ...state,
        data: [...state.data, action.title],
        activeCourse: !state.activeCourse
      };
    default:
      return state;
  }
}
