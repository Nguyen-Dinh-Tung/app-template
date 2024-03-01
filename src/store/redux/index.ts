import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const defaultValues = {
  user: null,
  conference: {},
  topic: {},
  conferenceTime: {},
  authorityForMe: [],
  votedTopics: [],
};

type StoreType = keyof typeof defaultValues;

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

export const store = configureStore({ reducer });

export const updateStore = (type: StoreType, payload: any) => {
  store.dispatch({ type, payload });
};

export const selectStore = (type: StoreType) => {
  return store.getState()[type];
};

export const useAppSelector = (type: StoreType) => {
  const data = useSelector((state: any) => state[type]);
  return data;
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
