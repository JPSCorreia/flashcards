import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from 'react-redux'


const topicSliceOptions = {
  name: 'topics',
  initialState: {
    topics: {

    }
  },
  reducers: {

    addTopic: (state, action) => {
      let obj = action.payload;
      obj = {
        ...obj,
        quizIds: []
      }
      state.topics[action.payload.id].push(obj)
    }

  }
  
}


export const topicsSelector = (state) => state.topics.topics;
export const topicsSlice = createSlice(topicSliceOptions);
export const { addTopic } = topicsSlice.actions;