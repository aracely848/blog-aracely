import data from '../api/topics.json';
export const TOPIC_SELECTED = "TOPIC_SELECTED"; 
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';

export const receiveTopics = topics => ({
  type: RECEIVE_TOPICS,
  payload: { topics }
}); 

export function getAllTopics() {
  return function (dispatch) {
    dispatch({
      type: RECEIVE_TOPICS,
      payload: data
    });

  }
}

export const topicSelected = topics => ({
  type: TOPIC_SELECTED,
  payload: { topics }
})

export function showTopic() {
  return function (dispatch) {
    dispatch({
      type: TOPIC_SELECTED,
      payload: data
    });

  }
}