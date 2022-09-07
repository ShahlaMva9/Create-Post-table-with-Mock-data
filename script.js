const tbody = document.querySelector("tbody");

const getPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      renderPosts(data);
    })
    .catch((err) => {
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
