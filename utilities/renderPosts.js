import { postsArray } from "./postsData.js";

export const renderPosts = () => {
  const postsContainerEl = document.querySelector(".feed");

  postsArray.forEach((post) => {
    const postContainer = document.createElement("div");
    postContainer.className = "post bg-white";

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
          <button class = "hover:cursor-pointer">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
          </button>
          <button class = "hover:cursor-pointer">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-message"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8" /><path d="M8 13h6" /><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" /></svg>
          </button>
          <button class= "hover:cursor-pointer">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-share-3"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" /></svg>
          </button>
        </div>

        <span class="post__likes font-bold">${post.likes} likes</span>

        <p class="user-comment"> <span class="font-bold">${post.username}</span> ${post.comment}  <span class="font-bold">${post.hastags}</span></p>
      </div>  
    `;

    postsContainerEl.appendChild(postContainer);
  });
};
