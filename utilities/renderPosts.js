import { postsArray } from "./postsData.js";
import * as postBody from "./createPost.js";

export const renderPosts = () => {
  const postsContainerEl = document.querySelector(".feed");

  postsArray.forEach((post) => {
    const postContainer = document.createElement("div");
    postContainer.className = "post bg-white";

    postContainer.innerHTML += `
      ${postBody.createPostHeader(post)}
      ${postBody.createPostPhoto(post)}
      ${postBody.createPostButtons(post)}
      ${postBody.createPostDescription(post)}
    `;

    postsContainerEl.appendChild(postContainer);
  });
};
