const tbody = document.querySelector("tbody");

function renderPosts(post) {
  post.forEach((el) => {
    const tbodyContent = `
    <tr>
            <td>${el.id}</td>
            <td>${el.userId}</td>
            <td>${el.title}</td>
    </tr>
    `;
    tbody.innerHTML += tbodyContent;
  });
}

const getPosts = (post) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      renderPosts(data);
    });
};

getPosts();
