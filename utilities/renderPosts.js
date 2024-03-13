import { postsArray } from "./postsData.js";
import { createPost } from "./createPost.js";
const postsContainerEl = document.querySelector(".feed");

export const renderPosts = (e) => {
  postsArray.forEach((post) => {
    postsContainerEl.appendChild(createPost(post));
  });
};
