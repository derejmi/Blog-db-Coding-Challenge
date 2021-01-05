const form = document.querySelector("#new-posts-form");

form.addEventListener("submit", submitPost);

getAllPosts();

//index
function getAllPosts() {
  fetch("http://localhost:3000/books")
    .then((r) => r.json)
    .then(appenPosts)
    .catch(console.warn);
}
