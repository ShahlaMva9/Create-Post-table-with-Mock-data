const tbody = document.querySelector("tbody");
const table = document.querySelector(".table");
const getPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      renderPosts(data);
      console.log(data);
    });
};
function renderPosts(post) {
  post.forEach((el) => {
    const tbodyContent = `
      <tr>
        <td>
              <a href='post/?id=${el.id}'>${el.title}</a> 
        </td>
      </tr>
      `;

    tbody.innerHTML += tbodyContent;
  });
}

getPosts();
