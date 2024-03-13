import { postsArray } from "./postsData.js";
import * as createPost from "./createPost.js";

export const renderPosts = () => {
  const postsContainerEl = document.querySelector(".feed");

  postsArray.forEach((post) => {
    const postContainer = document.createElement("div");
    postContainer.className = "post bg-white";

    postContainer.innerHTML += `
      ${createPost.createPostHeader(post)}
      ${createPost.createPostPhoto(post)}
      ${createPost.createPostButtons(post)}
      ${createPost.createPostDescription(post)}
    `;

    postsContainerEl.appendChild(postContainer);
  });
};
