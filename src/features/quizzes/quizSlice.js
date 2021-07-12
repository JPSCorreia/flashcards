import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from '../topics/topicSlice';


const quizSliceOptions = {
  name: 'quizzes',
  initialState: {
    quizzes: {

    }
  },
  reducers: {

    addQuiz: (state, action) => {
      let obj = action.payload;
      state.quizzes[action.payload.id] = obj;
    }

  }
  
};

export const quizThunkActionCreator = (payload) => {
  return (dispatch) => {
    dispatch(addQuiz(payload));
    dispatch(addQuizId({topicId: payload.topicId, id: payload.id}))
  }
};

export const quizzesSlice = createSlice(quizSliceOptions);

export const quizSelector = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;

