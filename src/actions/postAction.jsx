import { FETCH_POSTS, DROOV_DATA } from "./types";
import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQSflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";


export const fetchPosts = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => res.data)
    .then((data) => {
      console.log(data);
      dispatch({
        type: FETCH_POSTS,
        payload: data,
      });
    });
};

export const fetchDroovData = () => (dispatch) => {
  axios
    .get("https://dev.api.droov.io/play/users", {
      headers: { 
        'Access-Control-Allow-Origin' : '*',
        Authorization: "Bearer " + token
      },
    })
    .then(res => res.data)
    .then((data) => {
      dispatch({
        type: DROOV_DATA,
        payload: data,
      });
    });
};
