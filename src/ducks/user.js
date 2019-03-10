
const UPDATE_ROLE = "UPDATE_ROLE";


const initialState = {
  isAdmin: false
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ROLE:
      return {
        isAdmin: true
      };
    default:
      return state;
  }
}

export const  updateRole = () => ({
    type: UPDATE_ROLE
});

