import { postsArray } from "./postsData.js";
export const renderPosts = () => {
  const postsContainerEl = document.querySelector(".feed");

  postsArray.forEach((post) => {
    const postContainer = document.createElement("div");
    postContainer.className = "post";

    postContainer.innerHTML += `
      <div class="user-info grid grid-cols-[.1fr.8fr] gap-2 p-2 items-center justify-start ">
        <img class="user-avatar rounded-full w-10" src="${post.avatar}" alt="">
          <div class="grid">
            <p class="font-bold">${post.name}</p>
            <p class="text-[.75rem]">${post.location}</p>
          </div>
      </div>

      <div class="post__image">
        <img src="${post.photo}" alt="">
      </div>

      <div class="px-2 py-4 grid gap-2 items-center">
        <div class="post__icons flex items-center gap-[.7rem]">
          <img class="w-6 hover:cursor-pointer" src="./assets/images/icons/icon-heart.png"
              alt="heart-icon" role="button" aria-label="Like post">
          <img class="w-6 hover:cursor-pointer" src="./assets/images/icons/icon-comment.png"
              alt="comment-icon" role="button" aria-label="Comment on post">
          <img class="w-6 hover:cursor-pointer" src="./assets/images/icons/icon-share.png"
              alt="share-icon" role="button" aria-label="Share post">
        </div>

        <span class="post__likes font-bold">${post.likes} likes</span>

        <p class="user-comment"> <span class="font-bold">${post.username}</span> ${post.comment}  <span class="font-bold">${post.hastags}</span></p>
      </div>  
    `;

    postsContainerEl.appendChild(postContainer);
  });
};
