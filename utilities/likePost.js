import { postsContainerEl } from "./renderPosts.js";

export const handlePostLike = () => {
  const getPostClick = (e) => {
    const postEl = postsContainerEl.querySelector(".post");
    const likeEl = e.target.parentElement.dataset.action;
    if (!postEl) return;

    if (likeEl) updateLikeStatus(postEl);
  };

  postsContainerEl.addEventListener("click", getPostClick);

  const updateLikeStatus = (post) => {
    const likeBtn = post.querySelector(".btn-like");
    const heartIcon = likeBtn.querySelector(".fa-heart");
    console.log(heartIcon);
    const postLikes = post.querySelector(".post-likes");
    let likeCount = { value: Number(postLikes.textContent) };
    let isLiked = post.getAttribute("data-liked") === "true";

    isLiked
      ? dislikePost(likeBtn, heartIcon, likeCount)
      : likePost(likeBtn, heartIcon, likeCount);

    post.setAttribute("data-liked", String(!isLiked));
    postLikes.textContent = likeCount.value;
  };

  const dislikePost = (button, icon, likesNumber) => {
    button.classList.remove("text-red-500");
    button.classList.add("hover:opacity-50");
    icon.classList.remove("fa-solid");
    likesNumber.value--;
  };
  const likePost = (button, icon, likesNumber) => {
    button.classList.add("text-red-500");
    button.classList.remove("hover:opacity-50");
    icon.classList.add("fa-solid");
    likesNumber.value++;
  };
};
