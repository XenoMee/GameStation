import { postsArray } from "./postsData.js";
import { createPost } from "./createPost.js";
export const postsContainerEl = document.querySelector(".feed");

export const renderPosts = () => {
  postsArray.forEach((post) => {
    postsContainerEl.appendChild(createPost(post));
  });
};
