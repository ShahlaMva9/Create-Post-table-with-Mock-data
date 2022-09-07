const tbody = document.querySelector("tbody");
const table = document.querySelector(".table");
const getPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`Posts not found (${response.status})`);
      }
      return response.json();
    })
    .then((data) => {
      renderPosts(data);
    })
    .catch((err) => {
      table.innerHTML = `
      <h1>${err.message}</h1>
      `;
      console.log("Error: ", err.message);
    })
    .finally(() => {
      console.log("Finally");
    });
};
function renderPosts(post) {
  post.forEach((el) => {
    const tbodyContent = `
      <tr>
              <td>${el.id}</td>
              <td>${el.userId}</td>
              <td>${el.title}</td>
              <td>${el.body}</td>
  
      </tr>
      `;
    tbody.innerHTML += tbodyContent;
  });
}

getPosts();

const arr = [1, 2];
arr.length;
