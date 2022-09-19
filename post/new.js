const selector = document.getElementById("inputGroupSelect");
const title = document.getElementById("title");
const body = document.getElementById("floatingTextarea");
const submitBtn = document.getElementById("submit-btn");
const table = document.getElementById("table");
const tableHeader = document.querySelector("#table thead");
const form = document.getElementById("form");

let showTableHead = false;
let postDatas = {};
let postDataArr = [];

function requiredInputs() {
  title.required = true;
  body.required = true;
  //   selector.required = true;
}

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  addUserIdToOptions(data);
}

const optionRow = (id) => {
  const optionRow = `<option class='userId' value="${id}">${id}</option>`;
  selector.innerHTML += optionRow;
};

const addUserIdToOptions = (userInfos) => {
  userInfos.forEach((userInfo) => optionRow(userInfo.id));
};

const resetInputs = () => {
  title.value = body.value = "";
  selector.value = 1;
};

function createPost(e) {
  e.preventDefault();

  postDatas = {
    title: title.value,
    body: body.value,
    userId: selector.value,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: postDatas.title,
      body: postDatas.body,
      userId: postDatas.userId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      postDatas.id = json.id;
      createTable(postDatas);
      postDataArr.push(postDatas);
      setDataLocalStorage(postDataArr);
    });
  resetInputs();
}

function createTable(data) {
  if (!showTableHead) {
    tableHeader.classList.remove("d-none");
  }

  const tableContent = `
  <tbody>
    <tr>
      <td>${data.id}</td>
      <td>${data.userId}</td>
      <td>${data.title}</td>
      <td>${data.body}</td>
    </tr>
  </tbody>`;
  table.innerHTML += tableContent;
}

function setDataLocalStorage(data) {
  localStorage.setItem(`Posts`, JSON.stringify(data));
}

requiredInputs();
getUsers();
form.addEventListener("submit", createPost);
