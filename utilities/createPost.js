const createPostHeader = (post) => {
  return `
  <div class="user-info grid grid-cols-[.1fr.8fr] gap-2 p-2 items-center justify-start ">
    <img class="user-avatar rounded-full min-w-8" src="${post.avatar}" alt="">
      <div class="grid">
        <p class="font-bold">${post.name}</p>
        <p class="text-[.75rem]">${post.location}</p>
      </div>
  </div>
  `;
};

const createPostPhoto = (post) => {
  return `
    <div class="post-image" data-action="like">
        <img src="${post.photo}" alt="">
    </div>
  `;
};

const createPostButtons = () => {
  return `
    <div class="px-2 py-4 grid gap-2 items-center">
        <div class="post__icons flex items-center gap-[.7rem]">
          <button class = "btn-like hover:cursor-pointer" data-action="like">
            <i class="fa-regular fa-heart"></i>
          </button>
          <button class = "hover:cursor-pointer">
            <i class="fa-regular fa-comment-dots"></i>
          </button>
          <button class= "hover:cursor-pointer">
            <i class="fa-regular fa-paper-plane"></i>
          </button>
    </div>
  `;
};

const createPostDescription = (post) => {
  return `
    <div class="post-description">
        <p><span class="post-likes font-bold">${post.likes}</span> likes</p>

        <p class="user-comment"> <span class="font-bold">${post.username}</span> ${post.comment}  <span class="font-bold">${post.hastags}</span></p>
    </div>
  `;
};

export const createPost = (post) => {
  const postEl = document.createElement("div");
  postEl.className = "post bg-white";
  postEl.setAttribute("data-liked", "false");

  postEl.innerHTML += `
    ${createPostHeader(post)}
    ${createPostPhoto(post)}
    ${createPostButtons(post)}
    ${createPostDescription(post)}
  `;

  return postEl;
};
