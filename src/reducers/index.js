import { RECEIVE_TOPICS, TOPIC_SELECTED } from '../actions/index';

const initialState = {
  topics: []
};

export default function reducer(state = initialState, action){
  switch(action.type){
    case RECEIVE_TOPICS:
      return {
        ...state,
        topics: action.payload
      };
    case TOPIC_SELECTED:
      return {
        ...state,
        topics: action.payload
      };
    default:
      return state;
  }
}

