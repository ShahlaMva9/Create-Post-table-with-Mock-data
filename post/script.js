const tbody = document.querySelector("tbody");
const commentTableBody = document.querySelector(".comment-table tbody");
const params = new URLSearchParams(location.search).get("id");
const editLink = document.getElementById("edit-link");
let comments = [];
let userInfos = [];

function createdNewPosts(data) {
  const newPosts = JSON.parse(localStorage.getItem("Posts"));
  newPosts.forEach((el) => {
    data.push(el);
  });

  // localStorage.setItem(`Datas`, JSON.stringify(datas));
}

const getPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      userInfos = [...data];
      createdNewPosts(userInfos);
      createUserInfoTable(userInfos);
    });
};

const getComments = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => {
      comments = [...data];
      createUserComments(comments);
    });
};

function createUserInfoTable(data) {
  const findUser = data.find((i) => i.id == params);
  setAlink(findUser.id);
  const tbodyTextContetn = `
  <tr>
  <td class="text-center">${findUser.id}</td>
  <td class="text-center">${findUser.userId}</td>
  <td>${findUser.title}</td>
  <td>${findUser.body}</td>
  </tr>
  `;
  tbody.innerHTML = tbodyTextContetn;
}

function createUserComments(data) {
  const findComments = data.filter((i) => i.postId == params);
  findComments.forEach((i) => {
    const commentContent = `
    <tr>
  <td class="text-center">${i.postId}</td>
  <td>${i.id}</td>
  <td>${i.name}</td>
  <td>${i.email}</td>
  <td>${i.body}</td>
  </tr>

    `;
    commentTableBody.innerHTML += commentContent;
  });
}

function setAlink(id) {
  editLink.setAttribute("href", `/post/edit/?id=${id}`);
}

getPosts();
getComments();
