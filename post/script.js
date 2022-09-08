const tbody = document.querySelector("tbody");
const commentTableBody = document.querySelector(".comment-table tbody");
const params = new URLSearchParams(location.search).get("id");

const getUser = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      handleUserInfo(data);
    });
};
const getComments = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => handlerUserComments(data));
};

function handleUserInfo(data) {
  const findUser = data.find((i) => i.id == params);
  const tbodyTextContetn = `
  <tr>

  <td>${findUser.id}</td>
  <td>${findUser.userId}</td>
  <td>${findUser.title}</td>
  <td>${findUser.body}</td>
  </tr>
  `;
  tbody.innerHTML = tbodyTextContetn;
}

function handlerUserComments(data) {
  const comments = data.filter((i) => i.postId == params);
  comments.forEach((i) => {
    console.log(i);
    const commentContent = `
    <tr>
  <td>${i.postId}</td>
  <td>${i.id}</td>
  <td>${i.name}</td>
  <td>${i.email}</td>
  <td>${i.body}</td>
  </tr>

    `;
    commentTableBody.innerHTML += commentContent;
  });
}
getUser();
getComments();
