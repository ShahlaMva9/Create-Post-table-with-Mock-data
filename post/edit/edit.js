const params = new URLSearchParams(location.search).get("id");
const title = document.getElementById("title");
const body = document.getElementById("body");
const selector = document.getElementById("inputGroupSelect");
const form = document.getElementById("form");
let userid = "";

function defaultValues(obj) {
  title.value = obj.title;
  body.value = obj.body;
  userid = obj.userId;
}

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  addUserIdToOptions(data);
}

const optionRow = (id) => {
  const optionRow = `<option class='userId' value="${id}">${id}</option>`;
  // console.log(optionRow);
  selector.innerHTML += optionRow;
};

const addUserIdToOptions = (userInfos) => {
  userInfos.forEach((userInfo) => {
    optionRow(userInfo.id);
  });
  const option = document.querySelectorAll(".userId");
  option[userid - 1].setAttribute("selected", "");
};

const getPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      findPost(data);
    });
};

function findPost(data) {
  const post = data.find((el) => el.id == params);
  console.log(post);
  defaultValues(post);
}

function getEditedPostValues() {}

getPosts();
getUsers();
