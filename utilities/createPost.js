const createHeader = (post) => {
  return `
  <div class="post__header pb-4 flex items-center justify-between">
    <div class="user-info grid grid-cols-[.1fr.9fr] gap-2 items-center justify-start">
      <div class="user-avatar">
        <img class="rounded-full min-w-8" src="${post.avatar}" alt="">
      </div>
      <div class="grid leading-tight">
        <p class="font-bold">${post.name}</p>
        <p class="text-[.75rem]">${post.location}</p>
      </div>
    </div>

    <div>
      <button class="text-lg hover:cursor-pointer hover:opacity-50">
      <i class="fa-solid fa-ellipsis"></i>
      </button>
     </div>

  </div>
  `;
};

const createPhoto = (post) => {
  return `
    <div class="post-image" data-action="like">
        <img class="rounded-md" src="${post.photo}" alt="">
    </div>
  `;
};

const createButtons = () => {
  return `
    <div class="py-2 grid gap-2 items-center">
        <div class="post__icons flex items-center justify-between">
          <div class="primary-icons flex gap-[.7rem]">
            <button class = "btn-like hover:cursor-pointer hover:opacity-50" data-action="like">
              <i class="text-lg fa-regular fa-heart"></i>
            </button>
            <button class = "hover:cursor-pointer hover:opacity-50">
              <i class="text-lg fa-regular fa-comment-dots"></i>
            </button>
            <button class= "hover:cursor-pointer hover:opacity-50">
              <i class="text-lg fa-regular fa-paper-plane"></i>
            </button>
          </div>
          <div class="secondary-icons flex items-center">
            <button class= "save-btn hover:cursor-pointer hover:opacity-50">
              <i class="text-lg fa-regular fa-bookmark"></i>
            </button>
          </div>

        </div>
    </div>
  `;
};

const createDescription = (post) => {
  return `
    <div class="post-description">
        <p><span class="post-likes font-bold">${post.likes}</span> likes</p>

        <p class="user-comment"> <span class="font-bold">${post.username}</span> ${post.comment}  <span class="font-bold">${post.hastags}</span></p>
    </div>
  `;
};

export const createPost = (post) => {
  const postEl = document.createElement("div");
  postEl.className = "post bg-white px-2 py-4";
  postEl.setAttribute("data-liked", "false");

  postEl.innerHTML += `
    ${createHeader(post)}
    ${createPhoto(post)}
    ${createButtons(post)}
    ${createDescription(post)}
  `;

  return postEl;
};
