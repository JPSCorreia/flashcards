import { createSlice } from "@reduxjs/toolkit";



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
      state.topics[obj.id] = obj;
    },

    addQuizId: (state, action) => {
      state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
    }

  }
  
}

export const topicsSlice = createSlice(topicSliceOptions);

export const topicsSelector = (state) => state.topics.topics;

export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;