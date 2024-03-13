import { postsArray } from "./postsData.js";
import { createPost } from "./createPost.js";

export const renderPosts = () => {
  const postsContainerEl = document.querySelector(".feed");

  postsArray.forEach((post) => {
    postsContainerEl.appendChild(createPost(post));
  });
};
