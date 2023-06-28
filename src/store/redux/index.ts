import { configureStore } from "@reduxjs/toolkit";

// type StoreType =
//   | "user"
//   | "conference"
//   | "topic"
//   | "conferenceTime"
//   | "authorityForMe"
//   | "votedTopics";

interface StoreValues {
  user: any;
  conference: any;
  topic: any;
  conferenceTime: any;
  authorityForMe: any;
  votedTopics: any;
}
type StoreType = keyof StoreValues;

const defaultValues: StoreValues = {
  user: null,
  conference: {},
  topic: {},
  conferenceTime: {},
  authorityForMe: [],
  votedTopics: [],
};

function reducer(state = defaultValues, { type, payload }: any) {
  return { ...state, [type]: payload };
  // switch (type) {
  //   case "user":
  //     return { ...state, user: payload };
  //   case "conference":
  //     return { ...state, conference: payload };
  //   case "topic":
  //     return { ...state, topic: payload };
  //   case "conferenceTime":
  //     return { ...state, conferenceTime: payload };
  //   case "authorityForMe":
  //     return { ...state, authorityForMe: payload };
  //   case "votedTopics":
  //     return { ...state, votedTopics: payload };

  //   default:
  //     return state;
  // }
}

const store = configureStore({ reducer });

export default store;

export const updateStore = (type: StoreType, payload: any) => {
  store.dispatch({ type, payload });
};

// const counterSlice = createSlice({
//   name: "app",
//   initialState: {
//     user: null,
//     conference: {},
//     topic: {},
//     conferenceTime: {},
//     authorityForMe: [],
//     votedTopics: [],
//   },
//   reducers: {
//     updateUser: (state, action) => {
//       state.user = action.payload;
//     },
//   },
// });

// export const { updateUser } = counterSlice.actions;

// const store = configureStore({
//   reducer: {
//     app: counterSlice.reducer,
//   },
// });
