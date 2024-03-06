export const renderPosts = () => {
  const postsContainerEl = document.querySelector(".posts");
  const postsArray = [
    {
      name: "Minh Pahm",
      username: "mintpahm",
      location: "Tokyo, Japan",
      avatar: "./assets/images/avatars/minh-pham-avatar.jpg",
      photo: "./assets/images/post/PC-Plant.jpg",
      comment:
        "I love plants and PCs so I thought to put them together and share my own",
      likes: 121,
    },
    {
      name: "Alex Suprun",
      username: "alexsup",
      location: "New York, USA",
      avatar: "./assets/images/avatars/alex-suprun-avatar.jpg",
      photo: "./assets/images/post/PC-Red.jpg",
      comment: "Red is my world and so is my PC!",
      likes: 50,
    },
    {
      name: "Alexander Hipp",
      username: "alexhipp",
      location: "Oslo, Norway",
      avatar: "./assets/images/avatars/alexander-hipp-avatar.jpg",
      photo: "./assets/images/post/PC-Green.jpg",
      comment: "Lorem Ipsum dolor sit amet, consectetur",
      likes: 121,
    },
    {
      name: "Olivia Jackson",
      username: "olijson",
      location: "London, United Kingdom",
      avatar: "./assets/images/avatars/olivia-jackson-avatar.jpg",
      photo: "./assets/images/post/PC-Cat.jpg",
      comment: "Lorem ipsum dolor sit amet, consectetur",
      likes: 121,
    },
    {
      name: "Aiony Haust",
      username: "aiohast",
      location: "Seoul, South Korea",
      avatar: "./assets/images/avatars/aiony-haust-avatar.jpg",
      photo: "./assets/images/post/PC-PurpleTeal.jpg",
      comment: "Lorem ipsum dolor sit amet, consectetur",
      likes: 121,
    },
    {
      name: "Vicky Hladynets",
      username: "vicknets",
      location: "Kyiv, Ukraine",
      avatar: "./assets/images/avatars/vicky-hladynets-avatar.jpg",
      photo: "./assets/images/post/PC-White.jpg",
      comment: "Lorem ipsum dolor sit amet, consectetur",
      likes: 121,
    },
    {
      name: "Diego Hernandez",
      username: "diegoherndez",
      location: "Madrid, Spain",
      avatar: "./assets/images/avatars/diego-hernandez-avatar.jpg",
      photo: "./assets/images/post/PC-Blue.jpg",
      comment:
        "I love plants and PCs so I thought to put them together and share my own",
      likes: 121,
    },
    {
      name: "Luis Villasmil",
      username: "luisvis",
      location: "Caracas, Venezuela",
      avatar: "./assets/images/avatars/luis-villasmil-avatar.jpg",
      photo: "./assets/images/post/PC-DarkBG.jpg",
      comment:
        "I love plants and PCs so I thought to put them together and share my own",
      likes: 121,
    },
  ];

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
              alt="heart-icon" aria-label="Like post">
          <img class="w-6 hover:cursor-pointer" src="./assets/images/icons/icon-comment.png"
              alt="comment-icon" aria-label="Comment on post">
          <img class="w-6 hover:cursor-pointer" src="./assets/images/icons/icon-share.png"
              alt="share-icon" aria-label="Share post">
        </div>

        <span class="post__likes font-bold">${post.likes} likes</span>

        <p class="user-comment"> <span class="font-bold">${post.username}</span> ${post.comment} </p>
      </div>  
    `;

    postsContainerEl.appendChild(postContainer);
  });
};
