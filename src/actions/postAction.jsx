import { FETCH_POSTS } from "./types";
import axios from "axios";

export const fetchPosts = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => res.data)
    .then((data) => {
      dispatch({
        type: FETCH_POSTS,
        payload: data,
      });
    });
};
