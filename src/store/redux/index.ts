import { configureStore } from "@reduxjs/toolkit";

const defaultValues = {
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
