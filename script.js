let datas = [];

const tbody = document.querySelector("tbody");
const table = document.querySelector(".table");

const getPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      datas = [...data];
      createdNewPosts(datas);
      createTableBody(datas);
      console.log(datas);
    });
};

function createTableBody(post) {
  post.forEach((el) => {
    const tbodyContent = `
      <tr>
        <td>
              <a class='nav-link' href='post/?id=${el.id}'>${el.title}</a> 
        </td>
      </tr>
      `;

    tbody.innerHTML += tbodyContent;
  });
}

function createdNewPosts(data) {
  const newPosts = JSON.parse(localStorage.getItem("Posts"));
  if (newPosts == null) return;
  newPosts.forEach((el) => {
    console.log(el);
    datas.push(el);
  });

  // localStorage.setItem(`Datas`, JSON.stringify(datas));
}

getPosts();
